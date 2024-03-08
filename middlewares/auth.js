module.exports = (req, res, next) => {
    const author = req.get("author");
    
    if (!author) {
        next(new Error("No Author"));
        return;
    }
    
    if ( author === 'admin') {
        const password = req.get(password);
        if (password !== '1234') {
            next(new Error('Invalid Admin Password'));
            return;
        }
    }
    next();
}