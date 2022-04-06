const { Categories } = require("../models/index");

const getCategories = async (req, res) => {

  const categorias = await Categories.findAll({
      attributes: ['name']
  });
  res.json(categorias);
};


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

const createCategory = async (req, res) => {
  try {
    const name = req.body.name;

    if (typeof name === "string") {
      const newCategorie = await Categories.create({ name: name });
      res.json(`category was created`);
    }
  } catch (error) {
    res.json(`the name is not a string`);
  }
}

const updateCategories = async (req, res) => {

  const category = await Categories.findByPk(req.params.categorieId);
  if (!category) {
      res.status(404).json('The category doesn`t exist');
  }
  else {
      await Categories.update(req.body, {
          where: { id: req.params.categorieId }
      });
      res.status(201).json({ msg: 'Category Successfully Updated' });
  }
};

const deleteCategory = async (req, res, next) => {
  const { id } = req.params
  try {
    const category = await Categories.destroy({
		where: {
			id
		}
	})
    category
      ? res.send(category)
      : res
          .status(404)
          .send("Category not found", 404);
  } catch (error) {
    res.status(500)
  }
};


module.exports = { getCategoryById, getCategories, updateCategories, createCategory, deleteCategory};
