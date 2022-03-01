const { check, validationResult } = require("express-validator");

const validate = [
    check("name")
    .exists()
    .not()
    .isEmpty(),
    check("email")
    .exists()
    .isEmail(),
    (req, res, next) => {
        validateResult(req, res, next)
    }
];


const validateResult = (req, res, next) => {
    try {
        validationResult(req).throw()
        return next()
    } catch (err) {
        res.status(404).send({ errors: err.array() })

    }

}
module.exports = {
    validate
}