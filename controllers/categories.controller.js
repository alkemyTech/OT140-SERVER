const { Categories } = require("../models/index");


const getCategoryById = async (req, res, next) => {
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




module.exports = { getCategoryById};
