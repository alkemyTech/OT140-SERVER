var express = require('express');
var router = express.Router();
const { Comments } = require('../db');



//listado comments
router.get('/', async (req, res) =>{
    const com = await Comments.findAll({
        attributes: ['body'],
        order: ['createdAt']
      }); 
    res.json(com);
});

module.exports = router;