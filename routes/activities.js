const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const { postActivities } = require('../controllers/activities');
const { validarCampos } = require('../middlewares/middlewares');
const activitiesController = require('../controllers/activities');

router.post('/', [
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('content', 'El content es obligatorio').not().isEmpty(),
    validarCampos,
], postActivities);

router.put('/:id',activitiesController.updateActivity);


module.exports = router;
