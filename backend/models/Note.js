import mongoose from "mongoose";

//Schema
const noteSchema = new mongoose.Schema(
  {
    title: {
      String,
      required: true,
    },
    content: {
      String,
      required: true,
    },
  },
  { timestamps: true } //to automatically add createdAt and updatedAt fields
);

//Model
const Note = mongoose.model("Note", noteSchema);

export default Note;
