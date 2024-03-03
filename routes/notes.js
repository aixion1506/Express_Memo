const { Router } = require('express');
const Note = require('../Models/note');

const router = Router();

router.get('/', (req, res, next) => {
    const notes = Note.list();
    res.json(notes);
})

router.get('/:id', (req, res, next) => {
    const id = Number(req.params.id);

    try {
        const note = Note.get(id);
        res.json(note);
    } catch (e) {
        next(e);
    }
})

exports.findByAuthor = (author) => {
    const filterd = notes.filter(note => note.author === author);
    return filterd;
}

module.exports = router;