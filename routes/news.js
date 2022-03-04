const express = require('express')
const router = express.Router()
const {createNews, updateNews} = require('../controllers/news.controller')
const {validateCreateNews} = require('../validator/news')

router
    .post('/', validateCreateNews, createNews)
    .put('/:id', updateNews)


module.exports = router