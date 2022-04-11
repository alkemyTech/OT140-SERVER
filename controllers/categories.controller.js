const { Categories } = require("../models/index");


const getCategories = async (req, res) => {

  let limit = 10;
  let offset = 0;
  const data = await Categories.findAndCountAll();
  let page = req.params.page; // page number
  let pages = Math.ceil(data.count / limit);
  offset = limit * (page - 1);

  const previousPage = page - 1;
  const nextPage = page + 1;

  const categorias = await Categories.findAll({
    attributes: ['name']
  });

  res.status(200).json({ 'result': categorias, 'count': data.count, 'pages': pages, 'previousPage': previousPage, 'nextPage': nextPage });
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

module.exports = {
  getCategoryById,
  getCategories,
  updateCategories,
  createCategorie,
  deleteCategorie
};
