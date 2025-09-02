import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";

import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;
const __dirname=path.resolve();   //frontend path


// Middleware FIRST
if(process.env.NODE_ENV!='production'){
  app.use(cors({
  origin: "http://localhost:5173", // React dev server
  credentials: true
}));
}

app.use(express.json()); // for parsing JSON bodies
app.use(rateLimiter);    // apply before routes

// Routes AFTER middleware
app.use("/api/notes", notesRoutes);


if(process.env.NODE_ENV==='production'){
  app.use(express.static(path.join(__dirname, "../frontend/dist")))

  app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"../frontend/dist/index.html"))
  });
}

// DB connect + start server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("✅ Server is running on port", PORT);
  });
});
