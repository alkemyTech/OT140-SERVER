var express = require('express');
var router = express.Router();
const {validateCreate} = require('../validator/user')
const userController = require('../controllers/userController');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
// DELETE user by id
router.delete('/:id', userController.delete)

//POST user
router.post('/auth/register', validateCreate, userController.post)

module.exports = router;

