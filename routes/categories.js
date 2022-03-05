const express = require('express');
const router = express.Router();
const { getCategories, updateCategories } = require('../controllers/categories');
const {checkToken} = require('../middlewares/check-token');


router.get('/', getCategories);
router.put('/:categorieId',checkToken, updateCategories);

module.exports = router;