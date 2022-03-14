const express = require("express");
const router = express.Router();
const { getNew } = require("../controllers/news");

router.get("/:id", getNew);

module.exports = router;
