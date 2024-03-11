const express = require('express');
const noteRouter = require('./routes/notes');
const authorRouter = require('./routes/authors')
const auth = require('./middlewares/auth');
const setUser = require('./middlewares/set-user');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('START');
});

app.use('/notes', auth, noteRouter);
app.use('/authors', authorRouter);
app.use('/users', setUser(), usersRouter);
app.use('/admin', setUser("admin"), adminRouter);

// 에러 핸들링 미들웨어
app.use((err, req, res, next) => {
    res.status(500);
    res.json({
        result : 'fail',
        error : err.message,
    });
});

// 404 핸들링 미들웨어
app.use((req, res, next) => {
    res.status(404);
    res.json({
        result : 'fail',
        error : `Page not found ${req.path}`,
    });
});

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port "http://localhost:${PORT}"`);
});
