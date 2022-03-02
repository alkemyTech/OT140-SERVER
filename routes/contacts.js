const express = require("express");
const { createContact } = require("../controllers/contact.controller");
const contactRouter = express.Router();

contactRouter
    .post("/", createContact);

module.exports = contactRouter;
