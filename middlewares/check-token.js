
// ====================================
// Verifica TOKEN en el Header
// ====================================
const jwt = require("jsonwebtoken");
const { User } = require("../models/");

const checkToken = async(req, res, next) => {
    if (!req.headers['user-token']) {
        return res.status(401).json({
            error: 'Need to include user-token on the header'
        });
    }
    try {
        const userToken = req.headers['user-token'];
        const { uid } = jwt.verify(userToken, process.env.SECRET);
        const user = await User.findOne({ where:{ id : uid, deletedAt : null } });
        if(!user) return res.status(404).json({ msg: 'Invalid token - User not found' });
        req.user = user;
        next();
        
    } catch (error) {
        return res.status(401).json({
            error: 'Error- Wrong TOKEN'
        });
    }
}

module.exports = {
    checkToken,
};