var express = require('express');
var usersRouter = express.Router();
const {signUp} = require('../controllers/user.controller')
const {validateCreate} = require('../validator/user')

/* GET users listing. */
usersRouter.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

usersRouter.post('/auth/register', validateCreate, signUp)

module.exports = usersRouter;

