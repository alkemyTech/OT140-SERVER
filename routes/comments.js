var express = require('express');
const { getComments, getCommentsByPost } = require('../controllers/comments');
var router = express.Router();


router.get('/', getComments);
router.get('/posts/:postId', getCommentsByPost);

module.exports = router;