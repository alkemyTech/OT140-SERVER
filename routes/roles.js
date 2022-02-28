const express = require('express');
const router = express.Router();
const { getAll, getById } = require('../controllers/roles');

/* GET users listing. */
router.get('/', getAll);
router.get('/:id', getById);

module.exports = router;