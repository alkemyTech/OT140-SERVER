const express = require('express');
const router = express.Router();
const { getAll, create, update,remove } = require('../controllers/members');

/* GET members listing. */
router.get('/', getAll);

/* POST members listing. */
router.post('/', create);
router.put('/:id',update);
router.delete('/:id', remove);
module.exports = router; 