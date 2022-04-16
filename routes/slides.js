const { Router } = require('express');
const Slide = require('../models').Slide;
const {get, getById, postSlide, updateSlide } = require('../controllers/slidesController');

const router = Router();
/* GET home page. */

router.get('/', get);
router.get('/:id', getById);
router.post('/', postSlide);
router.put('/:id', updateSlide);

module.exports = router;