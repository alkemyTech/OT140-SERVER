const { New } = require("../models/index");


const createNews = async (req, res) => {
  const { name, content, image, categoryId } = req.body;
  try {
    const newNews = await New.create({
      name,
      content,
      image,
      categoryId,
    });
    res.status(200).send({ message: "New created", data: newNews });
  } catch (err) {
    console.log(err)
    res.status(500).json('Internal server error');
   
  }
};

const updateNews = async (req, res) => {
  const { id } = req.params;
  const { name, content, image, categoryId } = req.body;
  try {
    const news = await New.findOne({
      attributes: ["name", "content", "image", "categoryId"],
      where: {
        id,
      },
    });
    if (!news) {
      res.status(404).send("New not found");
    }
    const updatedNew = await New.update(
      {
        name,
        content,
        image,
        categoryId,
      },
      {
        where: {
          id,
        },
      }
    );
    res.status(200).send({message: "New succesfully updated", data: updatedNew})

  } catch (err) {
      console.log(err)
      res.status(500).json('Internal server error')
  }
};
module.exports = { createNews, updateNews };
