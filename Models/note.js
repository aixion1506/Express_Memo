let notes = [
    {
        id : 1,
        title : '첫 메모',
        content : '라니가 작성한 첫 메모.',
        author : 'rani',
    },
    {
        id : 2,
        title : '두번째는 성환이 작성',
        content : '하이 성환이다.',
        author : 'SH',
    },
];

exports.list = () => {
    return notes.map(({id , title, author}) => ({
        id,
        title,
        author,
    }));
}

exports.get = (id) => {
    const note = notes.find((note) => note.id === id);

    if (!note) {
        throw new Error('Note not found');
    }

    return note;
}

exports.authorList = () => {
    const authors = notes.map(({ author }) => author);
    
    return [...new Set(authors)];
}

exports.findByAuthor = (author) => {
    const filterd = notes.filter(note => note.author === author);

    if(filterd.length < 1) {
        throw new Error(`${author} has no note`);
    }

    return filterd;
}