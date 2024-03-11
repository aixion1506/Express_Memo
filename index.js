const express = require('express');
const noteRouter = require('./routes/notes');
const authorRouter = require('./routes/authors')
const auth = require('./middlewares/auth');
const setUser = require('./middlewares/set-user');

const app = express();

const hasError = (req, res, next) => {
    next("ERROR");
}

app.use(express.json());

app.get('/', (req, res) => {
    res.send('START');
});

app.get('/success', (req, res) => {
    res.send("SUCCESS");
});

app.get('/fail', hasError, (req, res) => {
    res.send("FAIL");
})

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

// 오류처리 미들웨어 추가
app.use((err, req, res, next) => {
    res.send(`Request failed with ${err}`);
})

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port "http://localhost:${PORT}"`);
});
