var express = require('express');
var router = express.Router();
var userController = require("../controllers/userController");

/* GET users listing. PRUEBA*/
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
// DELETE user by id
//router.delete('/:id', userController.delete)

router.patch("/:id", userController.userUpdate);


module.exports = router;
