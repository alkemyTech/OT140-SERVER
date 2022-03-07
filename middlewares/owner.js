const db = require("../models");
const {checkToken} = require('./check-token'); 

// No funciona, todavia no tengo autenticación de usuarios ni la funcion que genera token

const isOwnComment = async (req, res, next) => {
  try {
    
    const userDecoded = checkToken();
    const { id } = req.params;
    const author = await db.User.getById(userDecoded.id);

    if (!author) {
       res.status(404).json('User not found');
    };

    const comment = await db.Comment.getById(id);

    if (comment.UserId === author.id) {
      return next();
    }else{
      res.status(403).json('you are not the author of this comment')
    }

  } catch (err) {
    next(err);
  }
};

module.exports = isOwnComment;