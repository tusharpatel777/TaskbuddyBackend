import mongoose from "mongoose";
import User from "./User.js";
const TaskSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    title: String,
    description: String,
    status: { type: String, enum: ["pending", "completed"], default: "pending" },
  });
 const Task = mongoose.model("Task", TaskSchema);
 export default Task
  