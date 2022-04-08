const { Router } = require('express');
const Slide = require('../models').Slide;
const { postSlide, updateSlide,deleteSlide } = require('../controllers/slidesController');

const router = Router();
/* GET home page. */

router.post('/', postSlide );
router.put('/:id', updateSlide );
router.delete('/:id',deleteSlide)

module.exports = router;
