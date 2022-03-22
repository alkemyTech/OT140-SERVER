const express = require("express");
const { createContact } = require("../controllers/contact.controller");
const router = express.Router();

router
    .post("/", createContact);

module.exports = router;
