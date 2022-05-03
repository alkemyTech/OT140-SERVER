
const express = require("express");
const { getContacts, createContact, contactFindAll } = require('../controllers/contacts');
const { checkToken} = require('../middlewares/check-token');
const {checkIsAdminLogged} = require('../middlewares/commons');
const router = express.Router();

router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.post("/", createContact);

    router.get('/backoffice', checkToken,checkIsAdminLogged, getContacts);

router.get("/", checkToken, checkIsAdminLogged, contactFindAll);    

module.exports = router;

