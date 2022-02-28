const express = require('express');
const categoriesRouter = express.Router()
const {getCategoryById, getCategories, updateCategories, createCategory, deleteCategory} = require('../controllers/categories.controller')

categoriesRouter
            .get('/:id', getCategoryById)
            .get('/', getCategories)
            .post('/', createCategory)
            .put('/:id', updateCategories)
            .delete('/:id', deleteCategory)
  
  module.exports = categoriesRouter;