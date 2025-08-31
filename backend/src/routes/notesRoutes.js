import express from "express";
import {
  getAllNotes,
  getNoteByID,
  createNote,
  updateNote,
  deleteNote,
} from "../controllers/notesControllers.js";
const router = express.Router();

router.get("/", getAllNotes); // from controllers

router.get("/:id", getNoteByID); // from controllers

router.post("/", createNote); // from controllers

router.put("/:id", updateNote); // from controllers

router.delete("/:id", deleteNote); // from controllers

export default router;
