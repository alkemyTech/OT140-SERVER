const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { sendWelcomeEmail } = require("../middlewares/sendEmail");

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

// POST create new users
//router.post('/register'...............)
//once created and assigned the database id to new user
//call the function sendWelcomeEmail() 

// DELETE user by id
router.delete('/:id', userController.delete)

module.exports = router;