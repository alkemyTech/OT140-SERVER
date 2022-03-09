var express = require('express');
var router = express.Router();
const {validateCreate} = require('../validator/user')
var userController = require("../controllers/userController");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
// DELETE user by id
// router.delete('/:id', userController.delete)

router.patch("/:id", userController.userUpdate);


// POST user
router.post('/auth/register', validateCreate, userController.createUser)

module.exports = router;

