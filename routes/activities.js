const express = require('express');
const router = express.Router();
const activitiesController = require('../controllers/activities.js');


router.put('/:id', activitiesController.update)

module.exports = router;