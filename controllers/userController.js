const db = require("../models/index");


// module.exports = {
//   delete(req, res) {
//     const { id } = req.params;

//     User.findByPk(id)
//       .then((user) => {
//         // Message for user not found
//         if (!user) {
//           res.status(404).json("User not found");
//         } else {
//           // Delete the user
//           db.User.destroy({
//             where: { id },
//           })

//             .then((userDeleted) => {
//               res.status(200).json("user successfully deleted");
//             })
//             .catch((err) => {
//               res.status(500).json("500 Internal Server Error");
//             });
//         }
//       })
//       .catch((err) => {
//         res.status(500).json("500 Internal Server Error");
//       });
//   },
// };

const getUsers = async (req, res) => {
  try{
    const users = await db.User.findAll({})
    res.status(200).json(users)

  }catch(err){
    console.log(err)
    res.status(500).send('Internal server error')
  }
}
const createUser = async (req, res) => {
  try {
    const { firstName, lastName, email,image, password, roleId } = req.body;
    // const salt = bcrypt.genSalt(10);
    // const pass= bcrypt.hash(password,salt)
    const savedUser = await db.User.create({
      firstName,
      lastName,
      email,
      image,
      password,
      roleId,
    });
    res.status(200).send(savedUser);
  } catch (err) {
    res.status(500).send("Internal Server Error");
    console.log(err)
  }
};

const userUpdate = async (req, res) => {
  try {
    const { id } = req.params;
    const { firstName, lastName, email, image, password } = req.body;

    const userData = await db.User.findByPk(id);

    if (!userData) {
      res.status(404).json("Usuario no encontrado");
    } else {
      await db.User.update(
        {
          firstName: firstName,
          lastName: lastName,
          email: email,
          image: image,
          password: password,
        },
        {
          where: { id: id },
        }
      );

      const userDataUpdate = await db.User.findByPk(id);

      const response = {
        statusCode: 201,
        msg: "Usuario actualizado correctamente",
        userDataUpdate: userDataUpdate,
      };
      res.status(201).json({ response });
    }
  } catch (err) {
    const response = {
      status: 500,
      msg: "internal server error",
    };
    res.status(500).json({ response });
  }
};

const deleteUser = async(req, res) => {
  const { id } = req.params;
  try{
    const user = await db.User.findByPk(id)
    if(!user){
      res.status(404).json("User not found")
    }else{
      const deletedUser = await db.User.destroy({
        where: {
          id
        }
      })
      res.status(200).send({message: 'User deleted succesfully', data: deletedUser})
    }
    

  }catch(err){
    res.status(500).json("500 Internal Server Error")
  }
}

module.exports = {getUsers, userUpdate, createUser, deleteUser};
