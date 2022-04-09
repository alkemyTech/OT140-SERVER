const { check, validationResult } = require("express-validator");

const validateCreateMember = [
  check("name").exists().not().isEmpty().isString().withMessage('Ingrese un nombre correcto'),
 
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