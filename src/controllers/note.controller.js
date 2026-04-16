const Note = require('../models/note.model');

const createNote = async (req, res) => {
    try {
        const { title, content, category, isPinned } = req.body;
        const note = new Note({ title, content, category, isPinned });
        await note.save();
        res.status(201).json(note);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = { createNote };
