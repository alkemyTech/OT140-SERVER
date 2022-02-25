const express = require('express');
const router = express.Router();
const { sendWelcomeEmail } = require("../middlewares/sendEmail");

/* POST create new users
//router.post('/register'...............)
//once created and assigned the database id to new user
//call the function sendWelcomeEmail() 


/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

module.exports = router;