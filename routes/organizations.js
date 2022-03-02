const router = require('express').Router();
const Organization = require('../models').Organization;


router.get('/', async function(req, res, next) {
    
    
    res.send('respond with a resource');
})

module.exports = router;
