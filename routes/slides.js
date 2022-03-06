const express = require('express');
const router = express.Router();
const { getAll, getById, remove } = require('../controllers/slides');

//Add isAdmin, checkToken, middleware!
router.get('/', getAll);
router.get('/:id', getById);
router.delete('/:id', remove);

module.exports = router;