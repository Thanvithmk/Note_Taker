import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "../config/db.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;
connectDB();

app.use(express.json());  //middleware : this one is to convert the data into required format before sending it to controller

app.use((req,res,next)=>{
  console.log("hello");
  next();
})

app.use("/api/notes", notesRoutes);

app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
