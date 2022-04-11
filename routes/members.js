const express = require('express');
const router = express.Router();
const { getAll, create, update,remove } = require('../controllers/members');


module.exports = router; 