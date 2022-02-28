const express = require('express');
const router = express.Router();
const { getAll, getById, createUser } = require('../controllers/users');

/* GET users listing. */
router.get('/', getAll);
router.get('/:id', getById);

/* POST users listing. */
router.post('/', createUser);

module.exports = router;