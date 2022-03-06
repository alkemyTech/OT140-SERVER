const express = require('express');
const router = express.Router();
const { getAll, getById } = require('../controllers/slides');

router.get('/', getAll);
router.get('/:id', getById);
//router.delete('/:id');

module.exports = router;