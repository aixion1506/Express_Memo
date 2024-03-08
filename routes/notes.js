const { Router } = require('express');
const Note = require('../models/note');

const router = Router();


router.get('/', (req, res, next) => {
    const { search } = req.query;
    if (search) {
        const notes = Note.search(search);
        res.json(notes);
        return ;
    }
    const notes = Note.list();
    res.json(notes);
})

// 아이디의 리스트
router.get('/:id', (req, res, next) => {
    const id = Number(req.params.id);

    try {
        const note = Note.get(id);
        res.json(note);
    } catch (e) {
        next(e);
    }
})

// 게시글 게시 라우터
router.post('/', (req, res, next) => {
    const {title, content} = req.body;
    const author = req.get('author');
    const note = Note.create(title, content, author);
    res.json(note);
})

// 게시글 수정 라우터
router.put('/:id', (req, res, next) => {
    const id = Number(req.params.id);
    const author = req.get('author');
    const {title, content} = req.body;

    try {
        const note = Note.update(id, title, content, author);
        res.json(note);
    } catch (e) {
        next(e);
    }
})

// 게시글 삭제 라우터
router.delete('/:id', (req, res, next) => {
    const id = Number(req.params.id);
    const author = req.get('author');

    try {
        Note.delete(id, author);
        res.json({result : 'sucecss'});
    } catch (e) {
        next(e);
    }
});

exports.findByAuthor = (author) => {
    const filterd = notes.filter(note => note.author === author);
    return filterd;
}

module.exports = router;