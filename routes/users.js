var express = require('express');
var router = express.Router();
const { validateCreate } = require('../validator/user')
const userController = require("../controllers/userController");
const { getUserAuth } = require('../controllers/auth');

/* GET users listing. */
router.get('/', userController.getUsers);

// GET user auth
router.get('/auth', getUserAuth);

/* GET users listing. PRUEBA*/
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});
// DELETE user by id
router.delete('/:id', userController.deleteUser)

//UPDATE user by id
router.patch("/:id", userController.userUpdate);

// POST user
router.post('/auth/register', validateCreate, userController.createUser)

module.exports = router;

