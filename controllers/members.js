const { member } = require("../models/index");
const { listItemsDB } = require("../helpers/db/listItemsDB");

const getMember = async (req, res) => {
  const response = await listItemsDB(req, member, [ 'name' ] );
  const members = await member.findAll({
    attributes: ["name"],
  });
  res.status(200).json(response);
};


module.exports = { 
    getMember
};