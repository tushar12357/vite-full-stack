// api/blogs/create.js
import { connectDB } from "../../db.js";
import Blog from "../../models/Blog.js";
import slugify from "slugify";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    await connectDB();

    const {
      title,
      excerpt,
      content,
      author,
      readTime,
      category,
      featured = false,
      image,
    } = req.body;

    // Validation
    if (!title || !excerpt || !content || !author || !readTime || !category || !image) {
      return res.status(400).json({ message: "All required fields must be provided" });
    }

    // Generate slug
    const baseSlug = slugify(title, { lower: true, strict: true });
    let slug = baseSlug;
    let counter = 1;

    // Ensure slug is unique
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
      featured,
      image,
      slug,
    });

    await blog.save();

    res.status(201).json(blog);
  } catch (err) {
    console.error("POST /api/blogs/create error:", err);

    if (err.code === 11000) {
      return res.status(400).json({ message: "Slug already exists" });
    }

    res.status(500).json({ message: "Server error" });
  }
}