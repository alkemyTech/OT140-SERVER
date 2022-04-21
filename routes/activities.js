const express = require('express');
const router = express.Router();
const { getAll, getById, createActivity, updateActivity, deleteActivity } = require('../controllers/activities');
const { checkToken } = require("../middlewares/check-token");
const { checkIsAdminLogged } = require("../middlewares/commons");

router
    .get('/', getAll)
    .get('/:id', getById)
    .post('/', checkToken, checkIsAdminLogged, createActivity)
    .put('/:id', checkToken, checkIsAdminLogged, updateActivity)
    .delete('/:id', checkToken, checkIsAdminLogged, deleteActivity);

module.exports = router;