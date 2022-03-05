const {Comments}= require('../models/index');

const getComments=async(req, res)=>{
    const com = await Comments.findAll({
        attributes: ['body'],
        order: ['createdAt']
      }); 
    res.json(com);
};

module.exports ={
    getComments
}


