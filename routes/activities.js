const express = require('express');
const router = express.Router();
const activitiesController = require('../controllers/activities.js');
const checkIsAdmin = require('../middlewares/role');

router.put('/:id',checkIsAdmin,activitiesController.update);

module.exports = router;