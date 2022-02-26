const { Categories } = require("../models/index");

const getCategories = async (req, res, next) => {
  try {
    const categories = await Categories.findAll();
    categories
      ? res.status(200).send(categories)
      : res.status(404).send("Categories not found");
  } catch (err) {
    console.log(err);
  }
};

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

const createCategories = async (req, res, next) => {
  try {
    const { name, description, image } = req.body;
    const categories = new Categories({
      name,
      description,
      image,
    });
    const newCategory = await Categories.create(categories);
    res
      .status(200)
      .send({ data: newCategory, message: "Category succesfully created" });
  } catch (err) {}
};

const updateCategories = async (req, res, next) => {
    try{
        const {id} = req.params;
        const {name, description, image} = req.body;
        const category = await Categories.findAll({
            atributtes: ['name', 'description', 'image'],
            where: {
                id
            }
        })

        if(category.length > 0 ){
            category.forEach(async (cat) => {
                await cat.update({
                    name,
                    description,
                    image
                })
            })
        }
        res.send("Succesfully updated")

    }catch(err){
console.log(err)
    }
}

const deleteCategories = async (req, res, next) => {
    const {id} = req.params;
        const {name, description, image} = req.body;
        try{
            const category = await Categories.destroy({
                where: {
                    id
                }
            })
            res.send('Succesfully deleted')

        }catch(err){
console.log(err)
        }
}
module.exports = { getCategoryById, getCategories, createCategories, updateCategories, deleteCategories };
