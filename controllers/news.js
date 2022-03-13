const { New } = require("../models/index");

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
      const aNew = await New.findOne({ where: { id: parseInt(id) }, attributes: ['categoryId' ] });
      if( !aNew ) return res.status(404).json("No news with that id number");

      //delete
      await New.destroy({where: { id: parseInt(id) }});
      res.json("New deleted");
  } catch (error) {
      res.status(500).json({ msg: 'Internal Server Error at Delete new' });
  }
};


module.exports = {
  deleteNew,
  getNew
};
