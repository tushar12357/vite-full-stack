// api/blogs/create.js
import { connectDB } from "../../db.js";
import Blog from "../../models/Blog.js";
import slugify from "slugify";
import { v2 as cloudinary } from "cloudinary";
import { Buffer } from "buffer";

// Configure Cloudinary (set in .env)
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    await connectDB();

    // Parse form data manually (Vercel doesn't support bodyParser with files)
    const formData = await parseMultipartForm(req);

    const {
      title,
      excerpt,
      content,
      author,
      readTime,
      category,
      featured = "false",
    } = formData.fields;

    const file = formData.files.image?.[0];

    // Validate
    if (
      !title ||
      !excerpt ||
      !content ||
      !author ||
      !readTime ||
      !category ||
      !file
    ) {
      return res
        .status(400)
        .json({ message: "All fields including image are required" });
    }

    // Upload to Cloudinary
    const b64 = Buffer.from(file.buffer).toString("base64");
    const dataURI = `data:${file.mimetype};base64,${b64}`;

    const result = await cloudinary.uploader.upload(dataURI, {
      folder: "blogs",
      resource_type: "image",
    });

    const imageUrl = result.secure_url;

    // Generate unique slug
    const baseSlug = slugify(title, { lower: true, strict: true });
    let slug = baseSlug;
    let counter = 1;
    while (await Blog.findOne({ slug })) {
      slug = `${baseSlug}-${counter}`;
      counter++;
    }

    const blog = new Blog({
      title,
      excerpt,
      content,
      author,
      readTime,
      category,
      featured: featured === "true",
      image: imageUrl,
      slug,
    });

    await blog.save();

    res.status(201).json(blog);
  } catch (err) {
    console.error("POST /api/blogs/create error:", err);
    res.status(500).json({ message: err.message || "Server error" });
  }
}

// Helper: Parse multipart/form-data in Vercel
async function parseMultipartForm(req) {
  const chunks = [];
  for await (const chunk of req) {
    chunks.push(chunk);
  }
  const buffer = Buffer.concat(chunks);
  const boundary = req.headers["content-type"].split("boundary=")[1];
  const parts = parseFormData(buffer, boundary);

  const fields = {};
  const files = {};

  for (const part of parts) {
    if (part.filename) {
      const fieldName = part.name;
      if (!files[fieldName]) files[fieldName] = [];
      files[fieldName].push({
        buffer: part.data,
        filename: part.filename,
        mimetype: part["content-type"],
      });
    } else {
      fields[part.name] = part.data.toString("utf8");
    }
  }

  return { fields, files };
}

// Simple form parser (no external deps)
function parseFormData(buffer, boundary) {
  const parts = [];
  const boundaryBytes = Buffer.from(`--${boundary}`);
  const endBoundary = Buffer.from(`--${boundary}--`);

  let start = buffer.indexOf(boundaryBytes) + boundaryBytes.length + 2; // +2 for \r\n
  const end = buffer.indexOf(endBoundary);

  while (start > boundaryBytes.length && start < end) {
    const headerEnd = buffer.indexOf(Buffer.from("\r\n\r\n"), start);
    const headers = buffer.slice(start, headerEnd).toString("utf8");
    const contentStart = headerEnd + 4;
    const nextBoundary = buffer.indexOf(boundaryBytes, contentStart);

    const content = buffer.slice(contentStart, nextBoundary - 2); // -2 for \r\n

    const part = { headers: {} };
    headers.split("\r\n").forEach((line) => {
      const [key, value] = line.split(": ");
      if (key.toLowerCase() === "content-disposition") {
        const nameMatch = value.match(/name="([^"]+)"/);
        const filenameMatch = value.match(/filename="([^"]+)"/);
        part.name = nameMatch?.[1];
        part.filename = filenameMatch?.[1];
      }
      if (key.toLowerCase() === "content-type") {
        part["content-type"] = value;
      }
    });

    part.data = content;
    parts.push(part);

    start = nextBoundary + boundaryBytes.length + 2;
  }

  return parts;
}

// Required: Disable body parsing
export const config = {
  api: {
    bodyParser: false,
  },
};