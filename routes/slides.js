const { Router } = require("express");
const Slide = require("../models").Slide;
const {
  postSlide,
  updateSlide,
  deleteSlide,
} = require("../controllers/slidesController");
const { checkIsAdminLogged } = require("../middlewares/commons");
const router = Router();
/* GET home page. */

router.post("/", postSlide);
router.put("/:id", updateSlide);
router.delete("/:id",checkIsAdminLogged, deleteSlide);

module.exports = router;
