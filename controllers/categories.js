const { Categories } = require("../models");
const { listItemsDB } = require("../helpers/db/listItemsDB");

const getCategoryById = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await Categories.findOne({
      where: {
        id
      },
    });
    !category
      ? res.status(404).send("Category not found")
      : res
        .status(201)
        .send({ data: category, message: "Category succesfully found" });
  } catch (err) {
    res.status(500);
  }
};

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

const updateCategories = async (req, res) => {

  const category = await Categories.findByPk(req.params.categorieId);
  if (!category) {
    res.status(404).json('The category doesn`t exist');
  } else {
    await Categories.update(req.body, {
      where: { id: req.params.categorieId }
    });
    res.status(201).json({ msg: 'Category Successfully Updated' });
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

const getCategories = async(req, res) => {
  try {
    const response = await listItemsDB(req, Categories, [ 'name' ] );
    res.status(200).json( response );
  } catch (error) {
    res.status(500).json({ msg: "internal server error" });
  }

};

module.exports = {
  createCategorie,
  deleteCategorie,
  getCategoryById,
  getCategories,
  updateCategories
};