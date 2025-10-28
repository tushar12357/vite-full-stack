// api/blogs/create.js
import { connectDB } from "../db.js";
import Blog from "../models/Blog.js";
import slugify from "slugify";
import { v2 as cloudinary } from "cloudinary";
import { Buffer } from "buffer";

// ---------- Cloudinary ----------
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// ---------- Disable bodyParser ----------
export const config = {
  api: { bodyParser: false },
};

// ---------- Main Handler ----------
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    await connectDB();

    // Parse multipart manually
    const { fields, files } = await parseMultipartForm(req);

    const {
      title,
      excerpt,
      content,
      author,
      readTime,
      category,
      featured = "false",
    } = fields;

    const file = files?.image?.[0];

    // ---------- Validation ----------
    const missing = [];
    if (!title) missing.push("title");
    if (!excerpt) missing.push("excerpt");
    if (!content) missing.push("content");
    if (!author) missing.push("author");
    if (!readTime) missing.push("readTime");
    if (!category) missing.push("category");
    if (!file) missing.push("image");

    if (missing.length) {
      return res.status(400).json({
        message: `Missing required fields: ${missing.join(", ")}`,
      });
    }

    // ---------- Upload to Cloudinary ----------
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

    // ---------- Generate unique slug ----------
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
      readTime: Number(readTime),
      category,
      featured: featured === "true",
      image: imageUrl,
      slug,
    });

    await blog.save();

    res.status(201).json(blog);
  } catch (err) {
    console.error("POST /api/blogs/create error:", err);

    // Duplicate slug (MongoDB E11000)
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

// ---------- Multipart Parser (no deps) ----------
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