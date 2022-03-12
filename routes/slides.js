const { Router } = require('express');

const Slide = require('../models').Slide;
const { postSlide } = require('../controllers/slidesController');
const { checkToken } = require('../middlewares/check-token');

const router = Router();
/* GET home page. */

router.post('/',checkToken, postSlide );

module.exports = router;
