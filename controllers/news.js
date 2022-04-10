const { New } = require("../models/index");
const { listItemsDB } = require("../helpers/db/listItemsDB");
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

const listNews = async ( req, res ) => {
  try {
    const response = await listItemsDB(req, New, ['name', 'content', 'image', 'categoryId']);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: "internal server error" });
  }
  
  }
module.exports = {
  getNew,
  listNews
};
