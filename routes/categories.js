const express = require('express');
const router = express.Router()
const {getCategoryById, getCategories, updateCategories, createCategory, deleteCategory} = require('../controllers/categories.controller')

router
            .get('/:id', getCategoryById)
            .get('/', getCategories)
            .post('/', createCategory)
            .put('/:categorieId', updateCategories)
            .delete('/:id', deleteCategory)
  
  module.exports = router;

