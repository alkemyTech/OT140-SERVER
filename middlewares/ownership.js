const jwt = require("jsonwebtoken");
const { User } = require("../models/");

// Esta funcion se encarga de validar el token de cualquier usuario.
const checkToken = async(req, res, next) => {
    const token = req.headers['user-token'];
    if (!token) return res.status(401).json({ error: 'Need to include user-token on the header' });
    try {
        const { uid } = jwt.verify(token, process.env.SECRET);
        const user = await User.findOne({ where:{ id : uid, deletedAt : null } });
        if(!user) return res.status(404).json({ msg: 'Invalid token - User not found' });
        next();        
    } catch (error) {
        return res.status(403).json({msg: "Ha sucedido el siguiente error: "+error});
    }
}

// Esta funcion se encarga de validar el token solo de los administradores.
const checkTokenAdmin = async(req, res, next) => {
    const token = req.headers['user-token'];
    if (!token) return res.status(401).json({ error: 'Need to include user-token on the header' });
    try {
        const { uid } = jwt.verify(token, process.env.SECRET);
        const user = await User.findOne({ where:{ id : uid, deletedAt : null } });
        if(!user || user.RoleId !== 1) return res.status(403).json({ msg: 'Usuario no autorizado' });
        next();        
    } catch (error) {
        return res.status(403).json({msg: "Ha sucedido el siguiente error: "+error});
    }
}


module.exports = { checkToken, checkTokenAdmin };





