const {body} = require ('express-validator')

module.exports = {
// Form field name and content validations
    testimonialForm : [
        body ('name').notEmpty().withMessage ('Ingresa tu nombre'),
        body ('content').notEmpty().withMessage ('Ingresa un testimonio')
    ]

}