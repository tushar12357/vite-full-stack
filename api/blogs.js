import express from "express";
import cors from "cors";
import serverless from "serverless-http";
import { connectDB } from "./db.js";
import Blog from "./models/Blog.js";

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: "*", // your frontend URL
    methods: ["GET", "POST", "PATCH", "DELETE"],
    credentials: true,
  })
);

// ✅ Create new blog
app.post("/api/blogs", async (req, res) => {
  try {
    await connectDB();
    const { title, content, author } = req.body;
    if (!title || !content || !author)
      return res.status(400).json({ error: "All fields are required" });

    const newBlog = await Blog.create({ title, content, author });
    res.status(201).json(newBlog);
  } catch (error) {
    console.error("POST /api/blogs error:", error);
    res.status(500).json({ error: "Failed to create blog" });
  }
});

// ✅ Fetch all blogs
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

// ✅ Edit a blog
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

    if (!updated) return res.status(404).json({ error: "Blog not found" });

    res.status(200).json(updated);
  } catch (error) {
    console.error("PATCH /api/blogs/:id error:", error);
    res.status(500).json({ error: "Failed to update blog" });
  }
});

// ✅ Delete a blog
app.delete("/api/blogs/:id", async (req, res) => {
  try {
    await connectDB();
    const { id } = req.params;
    const deleted = await Blog.findByIdAndDelete(id);

    if (!deleted) return res.status(404).json({ error: "Blog not found" });

    res.status(200).json({ message: "Blog deleted successfully" });
  } catch (error) {
    console.error("DELETE /api/blogs/:id error:", error);
    res.status(500).json({ error: "Failed to delete blog" });
  }
});

// app.listen(3000, () =>
//   console.log("🚀 Server running on http://localhost:3000")
// );

// ✅ Export for Vercel
export default serverless(app);
