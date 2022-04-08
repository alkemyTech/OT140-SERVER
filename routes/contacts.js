const express = require("express");
const router = express.Router();
const { createContact, contactFindAll } = require("../controllers/contact.controller");
const {checkIsAdminLogged, checkToken} = require("../middlewares/commons");

router.get("/", checkToken, checkIsAdminLogged, contactFindAll);
router
    .post("/", createContact);

module.exports = router;
