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
const deleteMember= async (req, res) => {
  try {
    const { id } = req.params;

    const memberdata = await member.findByPk(id);

    if (!memberdata) {
      res.status(404).json("Member does not exist");
    } else {
      await member.destroy({where: { id: id }});
      res.status(200).json({msg: 'deleted Category' });
    }
  } catch (err) {
    res.status(500).json({ msg: 'Internal Server Error at delete '});
  }
};
  



module.exports = {
    createMember,
    getMember,
    deleteMember
};
