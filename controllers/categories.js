const db = require("../models/index");

const createCategorie = async (req, res) => {
  try {
    const name = req.body.name;

    if (typeof name === "string") {
      const newCategorie = await db.Categories.create({ name: name });
      res.json(`categorie was created`);
    }
  } catch (error) {
    res.json(`the name is not a string`);
  }
};

module.exports = { createCategorie };
