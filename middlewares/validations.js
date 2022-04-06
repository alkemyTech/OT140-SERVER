const {check, body} = require ('express-validator')
const {
    checkFieldRequired,
    checkIsEmail,
    checkIsAdminLogged,
    checkLength,
    checkTypeField
} = require('./commons.js');
//const { checkToken } = require('./check-token');
module.exports = {
    // Form field name and content validations
    testimonialForm : [
        body ('name').notEmpty().withMessage ('Ingresa tu nombre'),
        body ('content').notEmpty().withMessage ('Ingresa un testimonio')
    ],
    // PATH: /api/organizations/:id Method: PATCH
    organizationUpdateForm: [
       // checkToken,
        checkIsAdminLogged,
        checkFieldRequired('params', 'id'),
        checkTypeField("params", "id", "number"),
        checkTypeField("body", "name", "string"),
        checkLength("body", "name", null, 5, 50),
        checkTypeField("body", "image", "string"),
        checkLength("body", "image", null, 5, 50),
        checkTypeField("body", "address", "string"),
        checkLength("body", "address", null, 7, 50),
        checkTypeField("body", "phone", "number"),
        checkLength("body", "phone", null, 11, 13),
        checkTypeField("body", "email", "string"),
        checkLength("body", "email", null, 5, 50),
        checkIsEmail("body", "email"),
        checkTypeField("body", "welcomeText", "string"),
        checkLength("body", "welcomeText", null, 5, 300),
        checkTypeField("body", "aboutUsText", "string"),
        checkLength("body", "aboutUsText", null, 15, 700),
        checkTypeField("body", "isActive", "boolean")
    ]
}