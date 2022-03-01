const express = require('express');
const router = express.Router();
const { validate } = require('../validator/contacts');

/* GET contacts listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

/* POST contacts listing. */
router.post('/', validate) //validate that post contains name and email fields.

module.exports = router;