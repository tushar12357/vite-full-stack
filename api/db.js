import mongoose from "mongoose";

export async function connectDB() {
  const MONGODB_URI = process.env.MONGODB_URI;

  if (!MONGODB_URI) {
    throw new Error("❌ Missing MONGODB_URI in environment variables");
  }

  try {
    // If already connected, reuse connection
    if (mongoose.connection.readyState === 1) {
      console.log("✅ Using existing MongoDB connection");
      return mongoose.connection;
    }

    const opts = {
      bufferCommands: false,
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 10000,
    };

    const conn = await mongoose.connect(MONGODB_URI, opts);
    console.log("✅ MongoDB Connected:", conn.connection.name);
    return conn;
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error.message);
    throw error;
  }
}
