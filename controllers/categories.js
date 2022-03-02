const { Categories } = require("../models/index");

const createCategorie = async (req, res) => {
  try {
    const name = req.body.name;

    if (typeof name === "string") {
      const newCategorie = await Categories.create({ name: name });
      res.json({
        newCategorie,
        msg: `categorie was created`,
      });
    }
  } catch (error) {
    res.json(`the name is not a string`);
  }
};

const deleteCategorie = async (req, res) => {
  try {
    const { id } = req.params;

    const categorie = await Categories.findByPk(id);

    if (!categorie) {
      res.status(404).json("Category does not exist");
    } else {
      await Categories.destroy({
        where: { id: id },
        force: true,
      });

      const response = {
        status: 201,
        msg: "deleted Category",
      };
      res.status(201).json({ response });
    }
  } catch (err) {
    const response = {
      status: 500,
      msg: "internal server error",
    };
    res.status(500).json({ response });
  }
};

module.exports = { createCategorie, deleteCategorie };
