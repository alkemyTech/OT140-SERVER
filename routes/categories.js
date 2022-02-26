const express = require('express');
const categoriesRouter = express.Router()
const {getCategoryById, getCategories, createCategories, updateCategories, deleteCategories} = require('../controllers/categories.controller')

categoriesRouter
            .get('/:id', getCategoryById)
            .get('/', getCategories)
            .post('/', createCategories)
            .put('/:id', updateCategories)
            .delete('/:id', deleteCategories)
  module.exports = categoriesRouter;