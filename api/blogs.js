import express from "express";
import serverless from "serverless-http";
import cors from "cors";
import { connectDB } from "./db.js";
import Blog from "./models/Blog.js";

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.post("/api/blogs", async (req, res) => {
  try {
    await connectDB();
    const blog = new Blog(req.body);
    await blog.save();
    res.status(201).json(blog);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

app.get("/api/blogs", async (req, res) => {
  try {
    await connectDB();
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

export const handler = serverless(app);
export default handler;
