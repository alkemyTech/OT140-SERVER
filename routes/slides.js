const { Router } = require("express");
const Slide = require("../models").Slide;
const {
    postSlide,
    updateSlide,
    deleteSlide,
    listSlide,
    getById
} = require("../controllers/slidesController");
const { checkToken } = require("../middlewares/check-token");
const { checkIsAdminLogged } = require("../middlewares/commons");


const router = Router();
/* GET home page. */

router.post("/", postSlide);
router.put("/:id", updateSlide);
router.delete("/:id", checkToken, checkIsAdminLogged, deleteSlide);
router.get("/", checkToken, checkIsAdminLogged, listSlide);
router.get('/:id', checkToken, checkIsAdminLogged, getById);


module.exports = router;