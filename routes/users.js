var express = require('express');
var router = express.Router();
var userController = require("../controllers/userController");

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

// POST create new users
//router.post('/register'...............)
//once created and assigned the database id to new user
//call the function sendWelcomeEmail() 

// DELETE user by id
//router.delete('/:id', userController.delete)

router.patch("/:id", userController.userUpdate);


module.exports = router;