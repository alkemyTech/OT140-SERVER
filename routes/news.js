const express = require("express");
const router = express.Router();
const { deleteNew, getNew } = require("../controllers/news");

router.get("/:id", getNew);

router.delete("/:id", deleteNew);




module.exports = router;
