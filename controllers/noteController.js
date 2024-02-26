import Notes from "../models/notesModel.js";

export const getAllNotes = async (req, res) => {
  try {
    const notes = await Notes.find();

    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createNote = async (req, res) => {
  try {
    const { title, description } = req.body;
    const newNote = new Notes(
        { title, 
        description, 
        date: new Date() });
    const note = await newNote.save();
    res.status(201).json(note);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateNote = async (req, res) => {
  try {
    const { title, description } = req.body;
    const note = await Notes.findById(req.params.id);
    if (note) {
      note.title = title;
      note.description = description;
      const updatedNote = await note.save();
      res.status(200).json(updatedNote);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteNote = async (req, res) => {
  try {
    const note = await Notes.findByIdAndDelete(req.params.id);
    if (note) {
      res.status(200).json({ message: "Deleted Successfully" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
