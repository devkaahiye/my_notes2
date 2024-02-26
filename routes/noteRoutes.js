import express  from "express";
import { createNote, deleteNote, getAllNotes, updateNote } from "../controllers/noteController.js";

const routes = express.Router()

routes.route('/').get(getAllNotes).post(createNote)
routes.route('/:id').put(updateNote).delete(deleteNote)

export default routes