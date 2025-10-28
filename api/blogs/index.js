// api/blogs/index.js
import Blog from "../models/Blog.js";
import { connectDB } from "../db.js";
import slugify from "slugify";
import { v2 as cloudinary } from "cloudinary";
import { Buffer } from "buffer";

// ---------- Cloudinary Config ----------
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// ---------- Disable bodyParser for POST ----------
export const config = {
  api: { bodyParser: false },
};

// ---------- Main Handler (GET list, GET by id/slug, POST) ----------
export default async function handler(req, res) {
  const { method } = req;

  try {
    await connectDB();

    // ==================== GET: List Blogs ====================
    if (method === "GET") {
      // If an `id` (or slug) is present → fetch single blog
      const { id } = req.query;
      if (id) {
        const blog = await Blog.findOne({
          $or: [{ _id: id }, { slug: id }],
        }).lean();

        if (!blog) {
          return res.status(404).json({ message: "Blog not found" });
        }
        return res.status(200).json(blog);
      }

      // Otherwise → list with pagination / filters
      const {
        q = "",
        category = "",
        featured = "",
        page = 1,
        limit = 9,
      } = req.query;

      const filter = {};
      if (q) {
        const regex = new RegExp(q.trim(), "i");
        filter.$or = [{ title: regex }, { excerpt: regex }];
      }
      if (category) filter.category = category;
      if (featured === "true") filter.featured = true;

      const skip = (Number(page) - 1) * Number(limit);
      const total = await Blog.countDocuments(filter);

      const blogs = await Blog.find(filter)
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(Number(limit))
        .lean();

      return res.status(200).json({
        data: blogs,
        pagination: {
          page: Number(page),
          limit: Number(limit),
          total,
          pages: Math.ceil(total / Number(limit)),
        },
      });
    }

    // ==================== POST: Create Blog ====================
    if (method === "POST") {
      const { fields, files } = await parseMultipartForm(req);

      const {
        title,
        excerpt,
        content,
        unreadTime,
        author,
        category,
        featured = "false",
      } = fields;

      const file = files?.image?.[0];

      // ---------- Upload Image to Cloudinary ----------
      if (!file) {
        return res.status(400).json({ message: "Image file is required" });
      }

      const b64 = Buffer.from(file.buffer).toString("base64");
      const dataURI = `data:${file.mimetype};base64,${b64}`;

      let imageUrl;
      try {
        const result = await cloudinary.uploader.upload(dataURI, {
          folder: "blogs",
          resource_type: "image",
          allowed_formats: ["jpg", "jpeg", "png", "gif", "webp"],
        });
        imageUrl = result.secure_url;
      } catch (cloudErr) {
        console.error("Cloudinary upload failed:", cloudErr);
        return res.status(400).json({
          message: "Image upload failed",
          error: cloudErr.message,
        });
      }

      // ---------- Generate Unique Slug ----------
      const baseSlug = slugify(title, { lower: true, strict: true });
      let slug = baseSlug;
      let counter = 1;
      while (await Blog.findOne({ slug }).lean()) {
        slug = `${baseSlug}-${counter++}`;
      }

      // ---------- Save Blog ----------
      const blog = new Blog({
        title,
        excerpt,
        content,
        author,
        readTime: Number(unreadTime),
        category,
        featured: featured === "true",
        image: imageUrl,
        slug,
      });

      await blog.save();

      return res.status(201).json(blog);
    }

    // ==================== Method Not Allowed ====================
    return res.status(405).json({ message: "Method Not Allowed" });
  } catch (err) {
    console.error(`${method} /api/blogs error:`, err);

    if (err.code === 11000) {
      return res.status(400).json({ message: "Slug conflict – try a different title" });
    }

    res.status(500).json({
      message: "Internal Server Error",
      error: err.message,
      stack: process.env.NODE_ENV === "development" ? err.stack : undefined,
    });
  }
}

// ========== Multipart Form Parser (No External Deps) ==========
async function parseMultipartForm(req) {
  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  const buffer = Buffer.concat(chunks);

  const boundary = req.headers["content-type"]?.split("boundary=")[1];
  if (!boundary) throw new Error("Missing multipart boundary");

  const parts = parseFormData(buffer, boundary);

  const fields = {};
  const files = {};

  for (const part of parts) {
    if (part.filename) {
      const name = part.name;
      if (!files[name]) files[name] = [];
      files[name].push({
        buffer: part.data,
        filename: part.filename,
        mimetype: part["content-type"],
      });
    } else {
      fields[part.name] = part.data.toString("utf8").trim();
    }
  }

  return { fields, files };
}

function parseFormData(buffer, boundary) {
  const parts = [];
  const boundaryBytes = Buffer.from(`--${boundary}`);
  const endBoundary = Buffer.from(`--${boundary}--`);

  let start = buffer.indexOf(boundaryBytes) + boundaryBytes.length + 2; // skip \r\n
  const end = buffer.indexOf(endBoundary);

  while (start > boundaryBytes.length && start < end) {
    const headerEnd = buffer.indexOf(Buffer.from("\r\n\r\n"), start);
    const headers = buffer.slice(start, headerEnd).toString("utf8");
    const contentStart = headerEnd + 4;
    const nextBoundary = buffer.indexOf(boundaryBytes, contentStart);

    const content = buffer.slice(contentStart, nextBoundary - 2); // remove \r\n

    const part = {};
    headers.split("\r\n").forEach((line) => {
      const [key, value] = line.split(": ");
      const k = key.toLowerCase();
      if (k === "content-disposition") {
        part.name = value.match(/name="([^"]+)"/)?.[1];
        part.filename = value.match(/filename="([^"]+)"/)?.[1];
      }
      if (k === "content-type") part["content-type"] = value;
    });
    part.data = content;
    parts.push(part);

    start = nextBoundary + boundaryBytes.length + 2;
  }

  return parts;
}