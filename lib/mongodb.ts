import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("MONGODB_URI is not defined in environment variables");
}

export const connectDB = async () => {
  try {
    if (mongoose.connection.readyState >= 1) {
      return "MongoDB is already connected";
    }
    await mongoose.connect(MONGODB_URI, {
      dbName: "TaskManagementDB",
    });
    console.log("MongoDB Connected ✅");
  } catch {
    throw new Error("Failed to connect to MongoDB");
  }
};
