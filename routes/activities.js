const express = require('express');
const router = express.Router();
const { getAll, getById, createActivity, updateActivity, deleteActivity } = require('../controllers/activities');


router
    .get('/', getAll)
    .get('/:id', getById)
    .post('/', createActivity)
    .put('/:id', updateActivity)
    .delete('/:id', deleteActivity);

module.exports = router;