const express = require("express");
const router = express.Router();
const {
  createCategorie,
  deleteCategorie,
} = require("../controllers/categories");

router.post("/", createCategorie);

router.delete("/:id", deleteCategorie);

module.exports = router;
