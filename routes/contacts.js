
const express = require("express");
const { createContact, contactFindAll } = require("../controllers/contact.controller");
const { getContacts } = require('../controllers/contacts');
const { checkToken} = require('../middlewares/check-token');
const {checkIsAdminLogged} = require('../middlewares/commons');
const router = express.Router();

router
    .post("/", createContact);

    router.get('/backoffice', checkToken,checkIsAdminLogged, getContacts);

router.get("/", checkToken, checkIsAdminLogged, contactFindAll);    

module.exports = router;

