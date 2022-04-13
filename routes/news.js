const express = require('express')
const router = express.Router()
const { createNews, updateNews, getNew, listNews, deleteNew } = require('../controllers/news')
const { validateCreateNews } = require('../validator/news')
const { newsDeleteForm } = require('../middlewares/validations')
const { checkToken } = require('../middlewares/check-token')
const checkRole = require('../middlewares/check-role')

router
    .get("/:id", getNew)
    .get("/list", listNews)
    .post('/', validateCreateNews, createNews)
    .put('/:id', updateNews)
    .delete("/:id", newsDeleteForm, deleteNew);



module.exports = router;