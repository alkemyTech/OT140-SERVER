const express = require("express");
const router = express.Router();
const {
    getAllCategories,
    updateCategories,
    createCategorie,
    deleteCategorie,
    getCategories,
} = require("../controllers/categories");


router.post("/", createCategorie);

router.delete("/:id", deleteCategorie);

router.get('/get', getAllCategories);

router.get('/', getCategories);

router.put('/:categorieId', updateCategories);





module.exports = router;
