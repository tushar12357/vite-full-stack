import express from "express";
import serverless from "serverless-http";
import { connectDB } from "./db.js";
import Blog from "./models/Blog.js";

const app = express();
app.use(express.json());

// ✅ Create new blog (POST /api/blogs)
app.post("/api/blogs", async (req, res) => {
  try {
    await connectDB();
    const { title, content, author } = req.body;

    if (!title || !content || !author) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newBlog = await Blog.create({ title, content, author });
    res.status(201).json(newBlog);
  } catch (error) {
    console.error("POST /api/blogs error:", error);
    res.status(500).json({ error: "Failed to create blog" });
  }
});

// ✅ Fetch all blogs (GET /api/blogs)
app.get("/api/blogs", async (req, res) => {
  try {
    await connectDB();
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.status(200).json(blogs);
  } catch (error) {
    console.error("GET /api/blogs error:", error);
    res.status(500).json({ error: "Failed to fetch blogs" });
  }
});

// ✅ Update a blog (PATCH /api/blogs/:id)
app.patch("/api/blogs/:id", async (req, res) => {
  try {
    await connectDB();
    const { id } = req.params;
    const { title, content, author } = req.body;

    const updated = await Blog.findByIdAndUpdate(
      id,
      { title, content, author },
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ error: "Blog not found" });
    }

    res.status(200).json(updated);
  } catch (error) {
    console.error("PATCH /api/blogs/:id error:", error);
    res.status(500).json({ error: "Failed to update blog" });
  }
});

export const handler = serverless(app);
