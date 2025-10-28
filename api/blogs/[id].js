// api/blogs/[id].js
import { connectDB } from "../../db.js";
import Blog from "../../models/Blog.js";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { id } = req.query; // Vercel uses req.query for dynamic segments

  try {
    await connectDB();

    const blog = await Blog.findOne({
      $or: [{ _id: id }, { slug: id }],
    }).lean();

    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    res.status(200).json(blog);
  } catch (err) {
    console.error("GET /api/blogs/[id] error:", err);
    res.status(500).json({ message: "Server error" });
  }
}