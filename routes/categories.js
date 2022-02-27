const express = require('express');
const router = express.Router();
const { getCategories, updateCategories } = require('../controllers/categories');



router.get('/', getCategories);
router.put('/:categorieId', updateCategories);

module.exports = router;