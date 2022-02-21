
// ====================================
// Verifica TOKEN en el Header
// ====================================
const jwt = require("jsonwebtoken");

const checkToken = (req, res, next) => {

    if (!req.headers['user-token']) {
        return res.status(403).json({
            error: 'Need to include user-token on the header'
        });
    }
    next();
}

module.exports = {
    checkToken,
};