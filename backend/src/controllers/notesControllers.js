import Note from "../models/Note.js";

export async function getAllNotes(req, res) {
  try {
    const notes = await Note.find().sort({createdAt:-1});
    res.status(200).json(notes);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Something went wrong" });
  }
};

export async function getNoteByID(req, res) {
  try {
    const note = await Note.findById(req.params.id);
    if(!note) return res.status(404).json({message:"Note not found"})
    res.status(200).json(note);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Something went wrong" });
  }
};


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
};

export async function updateNote(req, res) {
  try{
    const {title,content}=req.body;
    const updatedNote = await Note.findByIdAndUpdate(req.params.id,{title,content},{new:true});

    if(!updatedNote) return res.status(404).json({message:"Note not found"})
      
    res.status(200).json(updatedNote);
  }catch(err){
    console.log(err);
    res.status(500).json({message:"Something went wrong..."});
  }
};

export async function deleteNote(req, res) {
  try{
    const deletedNote = await Note.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedNote);
  }
 catch(err){
  console.log(err)
  res.status(500).json({message:"Something went wrong..."});
 }
}