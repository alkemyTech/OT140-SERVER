const { check, validationResult } = require("express-validator");

const validateCreate = [
  check("firstName")
        .exists()
        .not()
        .isEmpty(),
  check("lastName")
        .exists()
        .not()
        .isEmpty(),
  check('password')
        .not()
        .isEmpty(),
  check("email")
        .exists()
        .isEmail(),
  check("roleId").exists(),
    (req, res, next)=> {
        validateResult(req, res, next)
    }
];

//manejador de errores
const validateResult = (req, res, next) => {
    try{
        validationResult(req).throw()
        return next()
    }catch(err){
        res.status(403).send({errors: err.array()})

    }

}
module.exports = {validateCreate}