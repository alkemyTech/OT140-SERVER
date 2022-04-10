const express = require("express");
const router = express.Router();
const { 
    createNews, 
    getNew, 
    listNews,
    updateNews, 
 } = require("../controllers/news");
 const { validateCreateNews } = require('../validator/news')


    router.get("/:id", getNew)
    router.get("/list", listNews );
    router.post('/', validateCreateNews, createNews)
    router.put('/:id', updateNews)


module.exports = router;
