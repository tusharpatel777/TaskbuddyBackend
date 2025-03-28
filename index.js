
import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import authRoutes from "./routes/authRoutes.js"
import taskRoutes from "./routes/taskRoutes.js";

dotenv.config();

const app = express();
app.use(express.json());
// ✅ Allow requests from your frontend
app.use(cors({
  origin: "https://taskbuddyfrontend.vercel.app", // Allow only your frontend
  methods: "GET,POST,PUT,DELETE",
  credentials: true, // Allow cookies if needed
}));


app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB Error:", err));

app.listen(5000, () => console.log("Server running on port 5000"));