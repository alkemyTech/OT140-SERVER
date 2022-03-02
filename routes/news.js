const express = require('express')
const newsRouter = express.Router()
const {createNews} = require('../controllers/news.controller')
const {validateCreateNews} = require('../validator/news')

newsRouter  
    .post('/', validateCreateNews, createNews)


module.exports = newsRouter