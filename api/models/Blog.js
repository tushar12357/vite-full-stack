// models/Blog.js
import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  id: { type: Number, unique: true }, // Our custom numeric ID
  title: { type: String, required: true },
  slug: { type: String, unique: true },
  excerpt: String,
  content: String,
  author: String,
  readTime: Number,
  category: String,
  featured: { type: Boolean, default: false },
  image: String,
}, {
  timestamps: true,
  toJSON: { 
    transform: (doc, ret) => {
      ret.id = ret.id; // Keep custom id
      delete ret._id;  // Remove MongoDB _id
      return ret;
    }
  },
  toObject: { 
    transform: (doc, ret) => {
      ret.id = ret.id;
      delete ret._id;
      return ret;
    }
  }
});

// Ensure index on slug
blogSchema.index({ slug: 1 });

export default mongoose.models.Blog || mongoose.model("Blog", blogSchema);