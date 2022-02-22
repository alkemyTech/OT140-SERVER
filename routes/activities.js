var express = require('express');
var router = express.Router();
const { check } = require('express-validator');
const { postActivities } = require('../controllers/activities');
const { validarCampos } = require('../middlewares/middlewares');


router.post('/', [
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('content', 'El content es obligatorio').not().isEmpty(),
    validarCampos,
], postActivities);

module.exports = router;

