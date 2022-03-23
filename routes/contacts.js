const express = require("express");
const { createContact } = require("../controllers/contact.controller");
const router = express.Router();

router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.post("/", createContact);

module.exports = router;
