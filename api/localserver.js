import express from "express";
import { connectDB } from "./db.js";
import Blog from "./models/Blog.js";
import cors from "cors";
import multer from "multer";
import slugify from "slugify";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// ---------- Middleware ----------
app.use(cors());
app.use(express.json());

// Serve uploaded files statically
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// ---------- Multer config ----------
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const name = slugify(path.basename(file.originalname, ext), {
      lower: true,
      strict: true,
    });
    cb(null, `${name}-${Date.now()}${ext}`);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5 MB
  fileFilter: (req, file, cb) => {
    const allowed = /jpeg|jpg|png|gif|webp/;
    const extOk = allowed.test(path.extname(file.originalname).toLowerCase());
    const mimeOk = allowed.test(file.mimetype);
    if (extOk && mimeOk) return cb(null, true);
    cb(new Error("Only image files are allowed"));
  },
});

// -------------------------------------------------
// GET /api/blogs  (same as before)
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
    console.error("GET /api/blogs error:", err);
    res.status(500).json({ message: err.message });
  }
});

// -------------------------------------------------
// GET /api/blogs/:id   (or :slug)
// -------------------------------------------------
app.get("/api/blogs/:id", async (req, res) => {
  try {
    await connectDB();

    const { id } = req.params;
    const blog = await Blog.findOne({
      $or: [{ _id: id }, { slug: id }],
    }).lean();

    if (!blog) return res.status(404).json({ message: "Blog not found" });
    res.json(blog);
  } catch (err) {
    console.error("GET /api/blogs/:id error:", err);
    res.status(500).json({ message: err.message });
  }
});

// -------------------------------------------------
// POST /api/blogs   (multipart/form-data)
// -------------------------------------------------
app.post(
  "/api/blogs",
  upload.single("image"), // "image" = name of the file field
  async (req, res) => {
    try {
      await connectDB();

      // Text fields come from the form-data "fields"
      const {
        title,
        excerpt,
        content,
        author,
        readTime,
        category,
        featured = "false",
      } = req.body;

      // ---------- Validation ----------
    //   if (
    //     !title ||
    //     !excerpt ||
    //     !content ||
    //     !author ||
    //     !readTime ||
    //     !category ||
    //     !req.file
    //   ) {
    //     return res
    //       .status(400)
    //       .json({ message: "All fields including image are required" });
    //   }

      // ---------- Generate unique slug ----------
      const baseSlug = slugify(title, { lower: true, strict: true });
      let slug = baseSlug;
      let counter = 1;
      while (await Blog.findOne({ slug })) {
        slug = `${baseSlug}-${counter}`;
        counter++;
      }

      // ---------- Build image URL ----------
      const imageUrl = `${req.protocol}://${req.get("host")}/uploads/${
        req.file.filename
      }`;

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
      console.error("POST /api/blogs error:", err);
      if (err.code === 11000) {
        return res
          .status(400)
          .json({ message: "A blog with this slug already exists" });
      }
      res.status(500).json({ message: err.message });
    }
  }
);

// -------------------------------------------------
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Local API running at http://localhost:${PORT}`);
});