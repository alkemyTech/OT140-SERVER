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
    res.status(500).json("Internal server error");
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
    res
      .status(200)
      .send({ message: "New succesfully updated", data: updatedNew });
  } catch (err) {
    console.log(err);
    res.status(500).json("Internal server error");
  }
};

const getNew = async (req, res) => {
  try {
    const newId = req.params.id;
    const newsDetails = await New.findAll({
      where: {
        id: newId,
      },
    });
    if (!newsDetails) {
      res.json("No news with that id number");
    } else {
      const response = {
        news: newsDetails,
      };
      res.status(201).json({ response });
    }
  } catch (error) {
    const response = {
      status: 500,
      msg: "internal server error",
    };
    res.status(500).json({ response });
  }
};
const deleteNew = async ( req, res ) => {
  try {
      const id = req.params.id;
      if( isNaN(id) || !req.params.id ) return res.status(400).json("id number is required or is not a number");
      //find if exist
      const niew = await New.findOne({ where: { id: parseInt(id) }, attributes: ['categoryId' ] });
      if( !niew ) return res.status(404).json("No news with that id number");
      //soft delete
      await New.destroy({where: { id: parseInt(id) }});
      res.json("New deleted");
  } catch (error) {
      res.status(500).json({ msg: 'Internal Server Error at delete new' });
  }
};
module.exports = { createNews, updateNews, getNew, deleteNew };
