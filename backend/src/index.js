import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware FIRST
app.use(cors({
  origin: "http://localhost:5173", // React dev server
  credentials: true
}));

app.use(express.json()); // for parsing JSON bodies
app.use(rateLimiter);    // apply before routes

// Routes AFTER middleware
app.use("/api/notes", notesRoutes);

// DB connect + start server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("✅ Server is running on port", PORT);
  });
});
