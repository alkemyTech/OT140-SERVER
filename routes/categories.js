const express = require('express');
const categoriesRouter = express.Router()
const {getCategoryById} = require('../controllers/categories.controller')

categoriesRouter
            .get('/:id', getCategoryById)
  
  module.exports = categoriesRouter;