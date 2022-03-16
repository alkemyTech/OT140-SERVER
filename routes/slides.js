const { Router } = require('express');
const Slide = require('../models').Slide;
const { postSlide, updateSlide } = require('../controllers/slidesController');

const router = Router();
/* GET home page. */

router.post('/', postSlide );
router.put('/:id', updateSlide );

module.exports = router;
