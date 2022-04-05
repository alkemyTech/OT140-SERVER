
const express = require("express");
const { createContact } = require("../controllers/contact.controller");
const { getContacts } = require('../controllers/contacts');
const { checkToken} = require('../middlewares/check-token');
const router = express.Router();

router
    .post("/", createContact);

    router.get('/backoffice', checkToken, getContacts);

module.exports = router;

