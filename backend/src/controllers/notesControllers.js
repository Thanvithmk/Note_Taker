import Note from "../models/Note.js";

export async function getAllNotes(req, res) {
  try {
    const notes = await Note.find();
    res.status(200).json(notes);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Something went wrong" });
  }
}

export async function createNote(req, res) {
  try{
    const {title,content}=req.body;
    const newNote=new Note({title,content});
    await newNote.save();
    res.status(201).json(newNote);
  }
  catch(err){
    console.log(err);
    res.status(500).json({message:"Something went wrong..."});
  }
}

export function updateNote(req, res) {
  res.status(200).json({ message: "Note updated successfully" });
}

export function deleteNote(req, res) {
  res.status(200).json({ message: "Note deleted successfully" });
}
