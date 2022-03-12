
// ====================================
// Verifica TOKEN en el Header
// ====================================
const jwt = require("jsonwebtoken");
const User = require("../models/user");

const checkToken = (req, res, next) => {

    if (!req.headers['user-token']) {
        return res.json({
            error: 'Need to include user-token on the header'
        });
    }

    const userToken = req.headers['user-token'];
    let payload = {};

    try {
        payload = jwt.verify(userToken, process.env.SEED, () => {
          if(User.roleId === 1){
              next();
          } else {
            return res.status(403).json({ message: "El usuario no es administrador." })
          }
        
        });

    } catch (error) {
        return res.status(403).json({
            error: 'Wrong TOKEN'
        });
    }

    //next();
}

module.exports = {
    checkToken,
};