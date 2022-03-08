const { Router } = require('express');
const router = Router();

const New = require('../models/').New;

const { deleteNew } = require('../controllers/newsController'); 

router.delete('/:id', deleteNew);




module.exports = router;