const { validationResult } = require('express-validator');

const validarCampos = (req, res, next) => {//Como es un middleware necesita un tercer arugmento cuando pasa

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json(errors);
    }

    next();

};


module.exports = {
    validarCampos
};