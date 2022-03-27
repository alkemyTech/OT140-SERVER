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

const getAll = async(req, res) => {
  try {
      const members = await member.findAll({
      });
      res.status(200).json({
          success: true,
          members
      });
  } catch (error) {
      res.status(404).json({
          success: false,
          msg: "Can't get all members."
      })
  };
};



const create = async(req, res) => {
  try {
      const { name,facebookUrl,instagramUrl,linkedinUrl,image, description } = req.body;
      if (typeof(name) === "string") {
          const newMember = await member.create({
              name,
              facebookUrl,
              instagramUrl,
              linkedinUrl,
              image,
              description,

          });
          res.status(200).json({
              sucess: true,
              msg: `Member ${name} was created.`,
              newMember
          });
      } else {
          res.status(404).json({
              success: false,
              msg: `The member name isn't a string.`
          });
      }

  } catch (error) {
      res.status(404).json({
          success: false,
          msg: `Can't create a new member.`
      });
  };
};

const update = async (req, res) => {

    try {
        const { id } = req.params;
        const { name,facebookUrl,instagramUrl,linkedinUrl,image, description } = req.body;

        const members = await member.findByPk(id);
      
        if (!members) {
         
            res.status(404).json('The member does not exist');
     
        } else {

            await member.update({
                name,
                facebookUrl,
                instagramUrl,
                linkedinUrl,
                image,
                description,
            }, {
                where: { id: id }
            })
            const membertUpdated = await member.findByPk(id);
            const response = {
                status: 201,
                msg: 'updated member',
                member: membertUpdated
            }
            res.status(201).json({ response })
        }


    } catch (err) {
        const response = {
            status : 500,
            msg :'internal server error'
        }
        res.status(500).json({ response })
    };
};

const remove = async (req, res) => {

    try {
        const { id } = req.params;

        const members = await member.findByPk(id);
      
        if (!members) {
         
            res.status(404).json('The comment does not exist');
     
        } else {

            await member.destroy( {
                where: { id: id }
            })
    
            const response = {
                status: 201,
                msg: `deleted ${id} commentary`,
            }
            res.status(201).json({ response })
        }


    } catch (err) {
        const response = {
            status : 500,
            msg :'internal server error'
        }
        res.status(500).json({ response })
    }

};

module.exports = { getMember,getAll,
  create,update,remove};
