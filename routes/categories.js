var express = require('express');
var router = express.Router();
const { getCategories, updateCategories } = require('../controllers/categories');


router.get('/', getCategories);
router.put('/:categorieId', updateCategories);

module.exports = router;
