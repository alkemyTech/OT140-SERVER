var express = require('express');
var router = express.Router();

const { create, update, deleteTestimony } = require ('../controllers/testimonialsController')

const validations = require ('../validations')

// POST Create testimony. name and content field validations 
router.post('/', validations.testimonialForm, create);

//PUT Update testimonies
router.put('/:id', update)

//DELETE Delete a testimony by id
router.delete('/:id', deleteTestimony)


module.exports = router;