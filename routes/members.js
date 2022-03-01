const express = require('express');
const router = express.Router();
const { getAll } = require('../controllers/members');

/* GET members listing. */
router.get('/', getAll);

module.exports = router;