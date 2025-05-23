// models/Project.ts
import mongoose, { Schema, Document } from "mongoose";

export interface IProject extends Document {
  name: string;
  language: string;
  dueDate: Date;
  status: "pending" | "completed" | "in progress";
}

const ProjectSchema = new Schema<IProject>({
  name: { type: String, required: true },
  language: { type: String, required: true },
  dueDate: { type: Date, required: true },
  status: {
    type: String,
    enum: ["pending", "completed", "in progress"],
    default: "pending",
    required: true,
  },
});

export default mongoose.models.Project ||
  mongoose.model<IProject>("Project", ProjectSchema);
