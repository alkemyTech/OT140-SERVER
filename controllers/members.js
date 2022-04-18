const { member } = require("../models/index");
const { listItemsDB } = require("../helpers/db/listItemsDB");

const getMember = async (req, res) => {
  const response = await listItemsDB(req, member, [ 'name' ] );
  const members = await member.findAll({
    attributes: ["name"],
  });
  res.status(200).json(response);
};

const createMember = async (req, res) => {
  try {
    const {name, facebookUrl, instagramUrl, linkedinUrl, image, description} = req.body;
    const newMember = await member.create({ 
      name: name,
      facebookUrl: facebookUrl,
      instagramUrl: instagramUrl,
      linkedinUrl: linkedinUrl,
      image: image,
      description: description
    });
    res.status(200).json({
      msg: `Member was created successfully`,
      data: newMember
  });
    
  } catch (error) {
      res.status(500).json({error});
  }
}


module.exports = { getMember, createMember  };