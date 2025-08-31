import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;


app.use(express.json());  //middleware : this one is to convert the data into required format before sending it to controller
app.use(rateLimiter);

app.use("/api/notes", notesRoutes);

//connect to database and then start the server
//they can be aslo written seperately
connectDB().then(()=>{
  app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
})

