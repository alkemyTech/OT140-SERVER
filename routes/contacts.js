var express = require('express');
var router = express.Router();
var contactsController = require("../controller/contactsController");

router.get("/", contactsController.contactFindAll);

module.exports = router;