const express = require('express')
const router = express.Router()
const {createNews, updateNews, getNew, deleteNew} = require('../controllers/news')
const {validateCreateNews} = require('../validator/news')

router
    .get("/:id", getNew)
    .post('/', validateCreateNews, createNews)
    .put('/:id', updateNews)
    .delete("/:id", deleteNew)




;

module.exports = router;
