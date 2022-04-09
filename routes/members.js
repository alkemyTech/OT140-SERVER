const express = require('express');
const router = express.Router();
const { getAll, update,remove, createMember } = require('../controllers/members');
const {validateCreateMember} = require("../validator/members");

/* GET members listing. */
//router.get('/', getAll);

/* POST members listing. */
router.post('/', validateCreateMember, createMember);
//router.put('/:id',update);
//router.delete('/:id', remove);

module.exports = router; 