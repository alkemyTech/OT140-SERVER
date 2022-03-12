const express = require("express");
const router = express.Router();
const { getNew } = require("../controllers/news");
const { checkToken } = require("../middlewares/check-token");

router.get("/:id", checkToken, getNew);

module.exports = router;
