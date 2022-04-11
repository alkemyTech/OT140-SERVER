const { check, validationResult } = require("express-validator");

const validateCreateMember = [
  check("name").exists().not().isEmpty().isString().withMessage('Ingrese un nombre correcto'),
  check("facebookUrl").exists().not().isEmpty().isString().withMessage('Ingrese una direccion correcta'),
  check("instagramUrl").exists().not().isEmpty().isString().withMessage('Ingrese una direccion correcta'),
  check("linkedinUrl").exists().not().isEmpty().isString().withMessage('Ingrese una direccion correcta'),
  check("image").exists().not().isEmpty().isString().withMessage('Ingrese una imagen correcta'),
  check("description").exists().not().isEmpty().isString().withMessage('Ingrese una descripcion correcta'),
 
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

const validateResult = (req, res, next) => {
  try {
    validationResult(req).throw();
    return next();
  } catch (err) {
    res.status(403).send({ errors: err.array() });
  }
};

module.exports = {validateCreateMember}