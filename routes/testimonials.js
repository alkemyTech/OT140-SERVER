var express = require('express');
var router = express.Router();

const { create, update, deleteTestimony, getAll } = require ('../controllers/testimonialsController');
const { checkToken } = require('../middlewares/check-token');

const validations = require ('../middlewares/validations')

//GET testimonies , 10 per page
router.get('/', getAll)

// POST Create testimony. name and content field validations 
router.post('/',[ checkToken, validations.testimonialForm], create);

//PUT Update testimonies
router.put('/:id', checkToken, update)

//DELETE Delete a testimony by id
router.delete('/:id', checkToken, deleteTestimony)


module.exports = router;