const { Router } = require('express');
const Note = require('../Models/note');

const router = Router();

router.get('/', (req, res, next) => {
    const notes = Note.authorList();
    res.json(notes);
});

router.get('/:author/notes', (req, res, next) => {
    const { author } = req.params;
    try {
        const notes = Note.findByAuthor(author);
        res.json(notes);
    } catch (e) {
        next(e);
    }
});

module.exports = router;