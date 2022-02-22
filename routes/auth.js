const express = require('express');
const router = express.Router();
const authController = require ('../controllers/authController')
const validations = require ('../validations')


router.post('/login' , validations.loginForm, authController.login);


module.exports = router;