import express from "express";
import { connectDB } from "./db.js";
import Blog from "./models/Blog.js";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// -------------------------------------------------
// GET /api/blogs
// Query params:
//   q          – search in title & excerpt
//   category   – exact match
//   featured   – "true" to return only featured posts
//   page       – 1-based page number (default 1)
//   limit      – items per page (default 9)
// -------------------------------------------------
app.get("/api/blogs", async (req, res) => {
  try {
    await connectDB();

    const {
      q = "",
      category = "",
      featured = "",
      page = 1,
      limit = 9,
    } = req.query;

    // Build Mongo query
    const filter = {};

    if (q) {
      const regex = new RegExp(q, "i");
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

    res.json({
      data: blogs,
      pagination: {
        page: Number(page),
        limit: Number(limit),
        total,
        pages: Math.ceil(total / Number(limit)),
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
});

// -------------------------------------------------
// GET /api/blogs/:id   (or :slug – both work)
// -------------------------------------------------
app.get("/api/blogs/:id", async (req, res) => {
  try {
    await connectDB();

    const { id } = req.params;

    // Accept both Mongo _id and custom slug
    const blog = await Blog.findOne({
      $or: [{ _id: id }, { slug: id }],
    }).lean();

    if (!blog) return res.status(404).json({ message: "Blog not found" });

    res.json(blog);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Local API running at http://localhost:${PORT}`));