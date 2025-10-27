import { connectDB } from "../db.js";
import Blog from "../models/Blog.js";

export default async function handler(req, res) {
  try {
    if (req.method !== "GET") {
      return res.status(405).json({ message: "Method not allowed" });
    }

    await connectDB();
    const blogs = await Blog.find();
    return res.status(200).json(blogs);
  } catch (err) {
    console.error("GET /blogs error:", err);
    return res.status(500).json({ message: "Server error" });
  }
}
