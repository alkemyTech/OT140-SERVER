const express = require("express");
const router = express.Router();
const { getNew, listPaginatedNews } = require("../controllers/news");

router.get("/list", listPaginatedNews );

router.get("/:id", getNew);
module.exports = router;
