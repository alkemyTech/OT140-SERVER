const { check, param, validationResult } = require("express-validator");
const { New } = require("../models");
const validateCreateNews = [
  check("name").exists().not().isEmpty(),
  check("content").exists().not().isEmpty(),
  check("image").exists().not().isEmpty(),
  check("categoryId").exists(),
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




module.exports = {validateCreateNews}