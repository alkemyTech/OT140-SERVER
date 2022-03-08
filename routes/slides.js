const { Router } = require('express');

const Slide = require('../models').Slide;
const { postSlide } = require('../controllers/slidesController');

const router = Router();
/* GET home page. */

router.post('/', postSlide );

module.exports = router;
