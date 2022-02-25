var express = require('express');
var router = express.Router();
var userController = require("../controllers/userController");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.put("/:id", userController.userUpdate);


module.exports = router;
