const express = require('express');
const router = express.Router();
const commentsController = require('../controllers/comments');
// const isOwnerBy = require('../middlewares/owner'); // Middleware para determinar si el usuario es el autor del comentario

router.put('/:id',/*isOwnerBy*/commentsController.update);
router.delete('/:id',commentsController.remove);
router.post('/',commentsController.create);
  
module.exports = router;