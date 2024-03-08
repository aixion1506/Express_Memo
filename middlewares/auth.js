module.exports = (req, res, next) => {
    const author = req.get("author");
    
    if (!author) {
        next(new Error("No Author"));
        return;
    }
    
    // admin 확인하기
    if ( admin === 'author'){
        const password = req.get(password);
        if ( pasword !== '1234!') {
            next( new Error('Invalid Admin Password'));
        }
        return;
    }
    next();
}



