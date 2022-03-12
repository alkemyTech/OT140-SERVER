const express = require('express');
const router = express.Router();
const activitiesController = require('../controllers/activities');
const { checkToken } = require('../middlewares/check-token');



router.put('/:id', checkToken, activitiesController.updateActivity);


module.exports = router;