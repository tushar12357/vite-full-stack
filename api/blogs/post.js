import { connectDB } from "../db.js";
import Blog from "../models/Blog.js";

export default async function handler(req, res) {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({ message: "Method not allowed" });
    }

    await connectDB();
    const blog = new Blog(req.body);
    await blog.save();
    return res.status(201).json(blog);
  } catch (err) {
    console.error("POST /blogs error:", err);
    return res.status(500).json({ message: "Server error" });
  }
}
