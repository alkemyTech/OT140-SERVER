const db = require("../models");

const isOwnComment = async (req, res, next) => {
  try {

    const reqId = tokenId(req); // No tengo middleware JWT. id contenido en el token. Por el momento dice que no está definido.
    const { id } = req.params;
    const userFound = await db.User.getById(reqId);

    if (!userFound) {
       res.status(404).json('User not found');
    };

    const role = await db.Role.getByName('Admin');
    if (!role) {
      res.status(404).json('Role not found');
    };

    if (userFound.roleId === role.id) {
      return next();
    };

    const comment = await db.Comment.getById(id);

    if (comment.UserId === userFound.id) {
      return next();
    }else{
      res.status(403).json('You are not the author of the comment or you are not an administrator.')
    }

  } catch (err) {
    next(err);
  }
};

module.exports = isOwnComment;