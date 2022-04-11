const { member } = require("../models/index");

const getMember = async (req, res) => {
  let limit = 10;
  let offset = 0;
  const data = await member.findAndCountAll();
  let page = req.params.page; // page number
  let pages = Math.ceil(data.count / limit);
  offset = limit * (page - 1);

  const previousPage = page - 1;
  const nextPage = page + 1;

  const members = await member.findAll({
    attributes: ["name"],
  });

  res
    .status(200)
    .json({
      result: members,
      count: data.count,
      pages: pages,
      previousPage: previousPage,
      nextPage: nextPage,
    });
};


module.exports = { 
    getMember
};