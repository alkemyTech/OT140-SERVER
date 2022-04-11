const express = require('express')
const router = express.Router()
const {createNews, updateNews, getNew} = require('../controllers/news')
const {validateCreateNews} = require('../validator/news')
// const newCheckToken = require('../middlewares/authorization');
router
    .get("/:id", getNew)
    .post('/', validateCreateNews, createNews)
    .put('/:id', updateNews)


module.exports = router;
