const express = require("express");
const router = express.Router();
const {
  createCategorie,
  deleteCategorie,
} = require("../controllers/categories");
const { getCategories, updateCategories } = require('../controllers/categories');

router.post("/", createCategorie);

router.delete("/:id", deleteCategorie);

router.get('/', getCategories);

router.put('/:categorieId', updateCategories);





module.exports = router;
