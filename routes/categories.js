const express = require("express");
const { createCategorie } = require("../controllers/categories");
const router = express.Router();

router.post("/categories", createCategorie);

module.exports = router;
