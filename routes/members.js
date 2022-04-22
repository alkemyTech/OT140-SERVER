const express = require('express');
const router = express.Router();

const { getMember, deleteMember, createMember } = require('../controllers/members');
const {validateCreateMember} = require("../validator/members");


router.post('/', validateCreateMember, createMember);
router.get('/', getMember);
router.delete("/:id", deleteMember);


module.exports = router; 