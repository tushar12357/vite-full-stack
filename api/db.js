import mongoose from "mongoose";
// import dotenv from "dotenv";
// dotenv.config()
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export async function connectDB() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!process.env.MONGODB_URI) {
    throw new Error("Missing MONGODB_URI");
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 10000,
    };

    cached.promise = mongoose.connect(process.env.MONGODB_URI, opts);
  }

  try {
    cached.conn = await cached.promise;
    console.log("MongoDB Connected");
    return cached.conn;
  } catch (e) {
    cached.promise = null;
    throw e;
  }
}

