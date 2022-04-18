const express = require('express');
const router = express.Router();
const { getMember, deleteMember } = require('../controllers/members');


router.get('/', getMember);
router.delete("/:id", deleteMember);


module.exports = router; 