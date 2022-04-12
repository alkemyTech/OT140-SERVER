const express = require('express');
const router = express.Router();
const {
    getCategoryById, 
    getCategories, 
    updateCategories, 
    deleteCategorie, 
    createCategorie
} = require('../controllers/categories');

router.get('/:id', getCategoryById);
router.get('/', getCategories);
router.post('/', createCategorie);
router.put('/:categorieId', updateCategories);
router.delete('/:id', deleteCategorie);
  
module.exports = router;

