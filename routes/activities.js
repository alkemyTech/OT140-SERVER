const express = require('express');
const router = express.Router();
const activitiesController = require('../controllers/activities');


router
    .get('/', activitiesController.getAll)
    .get('/:id', activitiesController.getById)
    .post('/', activitiesController.createActivity)
    .put('/:id', activitiesController.updateActivity);

module.exports = router;