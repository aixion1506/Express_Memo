const users = require('../data/users');

const setUsers = (type) => (req, res, next) => {
    const {userName} = req.query;
    if(type == 'admin') {
        req.user = users[userName];
        next();
        return;
    }
    req.user = users[userName];
    next();
}

module.exports = setUsers;