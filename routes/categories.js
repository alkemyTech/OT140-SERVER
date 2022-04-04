const express = require('express');
const router = express.Router()
const {getCategoryById, getCategories, updateCategories, getCategoriesName, deleteCategorie, createCategorie} = require('../controllers/categories.controller')

router.get('/name', getCategoriesName)
router.get('/:id', getCategoryById)
router.get('/', getCategories)
router.post('/', createCategorie)
router.put('/:categorieId', updateCategories)
router.delete('/:id', deleteCategorie)
  
module.exports = router;

