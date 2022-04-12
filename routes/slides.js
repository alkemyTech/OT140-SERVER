const { Router } = require("express");
const Slide = require("../models").Slide;
const {
  postSlide,
  updateSlide,
  listSlide,
} = require("../controllers/slidesController");
const {checkIsAdminLogged}= require('../middlewares/commons')

const router = Router();
/* GET home page. */

router.post("/", postSlide);
router.put("/:id", updateSlide);
router.get("/",checkIsAdminLogged, listSlide);

module.exports = router;
