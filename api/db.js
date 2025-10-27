import mongoose from "mongoose";

let cached = global.mongoose;
if (!cached) {
  cached = global.mongoose = { conn: null, promise: null, uri: null };
}

export async function connectDB() {
  const MONGODB_URI = process.env.MONGODB_URI;

  if (!MONGODB_URI) throw new Error("❌ MONGODB_URI not set");

  // 👇 if URI changed, clear old connection
  if (cached.uri && cached.uri !== MONGODB_URI) {
    console.log("🔄 Detected new MongoDB URI, resetting connection...");
    await mongoose.disconnect();
    cached.conn = null;
    cached.promise = null;
  }

  cached.uri = MONGODB_URI;

  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGODB_URI, { bufferCommands: false })
      .then((mongoose) => mongoose);
  }

  cached.conn = await cached.promise;
  console.log("✅ Connected to MongoDB:", mongoose.connection.name);
  return cached.conn;
}
