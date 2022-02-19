var express = require('express');
var router = express.Router();
const activitiesRouter = require('./activities');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/activities',activitiesRouter);

module.exports = router;
