var express = require('express');
const { getCommentsByPost } = require('../controllers/comments');
var router = express.Router();



router.get('/', getCommentsByPost);

module.exports = router;