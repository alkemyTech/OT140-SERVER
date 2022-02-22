var express = require('express');
var router = express.Router();

/* GET users listing. PRUEBA/prueba branch*/
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
