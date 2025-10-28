// pages/api/blogs/index.js
import Blog from "../models/Blog.js";
import { connectDB } from "../db.js";
import slugify from "slugify";
import { v2 as cloudinary } from "cloudinary";
import { Buffer } from "buffer";

// ---------- Cloudinary ----------
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// ---------- Disable body-parser for multipart ----------
export const config = { api: { bodyParser: false } };

// -------------------------------------------------------------------
// MAIN HANDLER
// -------------------------------------------------------------------
export default async function handler(req, res) {
  const { method, query, headers } = req;
  const origin = headers.origin;

  // Allow specific origins (add your production domain later)
  const allowedOrigins = ["http://localhost:3000,http://localhost:8080",
    "http://localhost:5173"
  ];

  if (origin && allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  } else {
    // Or use '*' for full public API (less secure)
    // res.setHeader('Access-Control-Allow-Origin', '*');
  }

  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', 'true');

  // Handle preflight
  if (method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    await connectDB();

    // ==============================================================
    // GET – LIST OR SINGLE (via query params)
    // ==============================================================
    if (method === "GET") {
      const {
        id,
        slug,
        q = "",
        category = "",
        featured = "",
        page = 1,
        limit = 9,
      } = query;

      // ---------- SINGLE BLOG ----------
      if (id || slug) {
        const lookup = id ? { _id: id } : { slug };
        const blog = await Blog.findOne(lookup).lean();

        if (!blog) return res.status(404).json({ message: "Blog not found" });
        return res.status(200).json(blog);
      }

      // ---------- LIST BLOGS ----------
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

    // ==============================================================
    // POST – CREATE
    // ==============================================================
    if (method === "POST") {
      const { fields, files } = await parseMultipartForm(req);

      const {
        title,
        excerpt,
        content,
        readTime: unreadTime,
        author,
        category,
        featured = "false",
      } = fields;

      const file = files?.image?.[0];
      if (!file) return res.status(400).json({ message: "Image required" });

      // ---- Cloudinary upload ----
      const b64 = Buffer.from(file.buffer).toString("base64");
      const dataURI = `data:${file.mimetype};base64,${b64}`;
      const upload = await cloudinary.uploader.upload(dataURI, {
        folder: "blogs",
        resource_type: "image",
      });
      const imageUrl = upload.secure_url;

      // ---- Unique slug ----
      const baseSlug = slugify(title, { lower: true, strict: true });
      let slug = baseSlug;
      let i = 1;
      while (await Blog.findOne({ slug }).lean()) slug = `${baseSlug}-${i++}`;

      // ---- Save ----
      const blog = new Blog({
        title,
        excerpt,
        content,
        author,
        readTime: Number(unreadTime?.replace(/\D/g, "") || 5),
        category,
        featured: featured === "true",
        image: imageUrl,
        slug,
      });
      await blog.save();

      return res.status(201).json(blog);
    }

    // ==============================================================
    // METHOD NOT ALLOWED
    // ==============================================================
    return res.status(405).json({ message: "Method Not Allowed" });
  } catch (err) {
    console.error("[blogs] error:", err);
    if (err.code === 11000) {
      return res.status(400).json({ message: "Slug already exists" });
    }
    return res.status(500).json({
      message: "Server error",
      error: err.message,
    });
  }
}

// -------------------------------------------------------------------
// MULTIPART PARSER (no deps)
// -------------------------------------------------------------------
async function parseMultipartForm(req) {
  const chunks = [];
  for await (const c of req) chunks.push(c);
  const buffer = Buffer.concat(chunks);

  const boundary = req.headers["content-type"]?.split("boundary=")[1];
  if (!boundary) throw new Error("No boundary");

  const parts = parseFormData(buffer, boundary);
  const fields = {},
    files = {};

  for (const p of parts) {
    if (p.filename) {
      const name = p.name;
      files[name] = files[name] || [];
      files[name].push({
        buffer: p.data,
        filename: p.filename,
        mimetype: p["content-type"],
      });
    } else {
      fields[p.name] = p.data.toString("utf8").trim();
    }
  }
  return { fields, files };
}

function parseFormData(buf, boundary) {
  const parts = [];
  const bound = Buffer.from(`--${boundary}`);
  const endBound = Buffer.from(`--${boundary}--`);

  let pos = buf.indexOf(bound) + bound.length + 2; // skip \r\n
  const end = buf.indexOf(endBound);

  while (pos > bound.length && pos < end) {
    const headerEnd = buf.indexOf(Buffer.from("\r\n\r\n"), pos);
    const headers = buf.slice(pos, headerEnd).toString("utf8");
    const dataStart = headerEnd + 4;
    const next = buf.indexOf(bound, dataStart);
    const data = buf.slice(dataStart, next - 2); // strip \r\n

    const part = {};
    headers.split("\r\n").forEach((l) => {
      const [k, v] = l.split(": ");
      const key = k.toLowerCase();
      if (key === "content-disposition") {
        part.name = v.match(/name="([^"]+)"/)?.[1];
        part.filename = v.match(/filename="([^"]+)"/)?.[1];
      }
      if (key === "content-type") part["content-type"] = v;
    });
    part.data = data;
    parts.push(part);

    pos = next + bound.length + 2;
  }
  return parts;
}
