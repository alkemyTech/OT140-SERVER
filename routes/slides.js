const express = require('express');
const router = express.Router();
const { getAll } = require('../controllers/slides');

router.get('/', getAll);
//router.get('/:id');
//router.delete('/:id');

module.exports = router;