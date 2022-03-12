const express = require("express");
const router = express.Router();
const {
  createCategorie,
  deleteCategorie,
} = require("../controllers/categories");
const { getCategories, updateCategories } = require('../controllers/categories');
const { checkToken } = require('../middlewares/check-token');

router.post("/", checkToken, createCategorie);
router.delete("/:id", checkToken, deleteCategorie);
router.get('/', getCategories);
router.put('/:categorieId', checkToken, updateCategories);





module.exports = router;
