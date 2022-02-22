const express = require('express');
const router = express.Router();
const activitiesController = require('../controllers/activities');



router.put('/:id',activitiesController.updateActivity);


module.exports = router;