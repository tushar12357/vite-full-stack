import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    excerpt: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: String, required: true },
    readTime: { type: String, required: true },   // e.g. "8 min read"
    category: { type: String, required: true },
    featured: { type: Boolean, default: false },
    image: { type: String, required: true },
    slug: { type: String, unique: true, required: true }, // used in URL
  },
  { timestamps: true }
);

// Ensure a unique index on slug
BlogSchema.index({ slug: 1 });

export default mongoose.models.Blog || mongoose.model("Blog", BlogSchema);