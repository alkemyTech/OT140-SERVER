const express = require('express');
const router = express.Router();

const commentsController = require('../controllers/comments');
const {validateComment} = require('../middlewares/commentValidator');
/*const isOwnerBy = require('../middlewares/owner');*/// Middleware para determinar si el usuario es el autor del comentario

router.put('/:id',validateComment,/*isOwnerBy,*/commentsController.update);
router.delete('/:id',commentsController.remove);
router.post('/',validateComment,commentsController.create);
router.get('/', commentsController.list);
  
module.exports = router;

