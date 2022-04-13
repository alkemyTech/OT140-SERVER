const express = require('express');
const router = express.Router();
const { getMember, deleteMember } = require('../controllers/members');

router
.delete("/:id", deleteMember);

module.exports = router; 