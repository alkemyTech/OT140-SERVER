const express = require('express');
const router = express.Router();
const { getAll, create } = require('../controllers/members');

/* GET members listing. */
router.get('/', getAll);

/* POST members listing. */
router.post('/', create);

module.exports = router;