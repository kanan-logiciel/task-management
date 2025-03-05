import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("MONGODB_URI is not defined in environment variables");
}

export const connectDB = async () => {
  try {
    if (mongoose.connection.readyState >= 1) {
      console.log("Already connected to MongoDB");
      return;
    }
    await mongoose.connect(MONGODB_URI, {
      dbName: "TaskManagementDB", // Set database name explicitly
    });
    console.log("MongoDB Connected ✅");
  } catch (error) {
    console.error("MongoDB Connection Error ❌:", error);
    throw new Error("Failed to connect to MongoDB");
  }
};
