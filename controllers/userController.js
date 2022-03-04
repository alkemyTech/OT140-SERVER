const db = require('../models/index')
const bcrypt = require("bcrypt");

module.exports = {
    delete(req, res) {
     const { id } = req.params

      User.findByPk(id)
      .then(user => {
          
            // Message for user not found
            if(!user) {
                res.status(404).json('User not found'); 
            } else {
                // Delete the user 
                db.User.destroy({
                where: { id }
                })
                
                .then((userDeleted) => {
                res.status (200).json('user successfully deleted')
                })
                .catch(err => {res.status(500).json('500 Internal Server Error')})
            }
        })  
        .catch(err => {res.status(500).json('500 Internal Server Error')})  
    },

    post(req, res){
        const {firstName, lastName, email, password, roleId} = req.body
        const salt =  bcrypt.genSalt(10)
        const savedUser = db.User.create({
            firstName,
            lastName,
            email,
            password: bcrypt.hash(password, salt),
            roleId
    })

    .then((savedUser) => {
        res.status(200).send('User succesfully created')
    })
    .catch(err => {res.status(500).json('500 Internal Server Error')})
}
}


const userUpdate = async (req, res) => {
    try {
        const {id}= req.params;
        const {firstName, lastName, email, image, password} = req.body;

        const userData = await db.User.findByPk(id);

        if(!userData){
            res.status(404).json('Usuario no encontrado'); 
        }
        else{
              await db.User.update({
                firstName : firstName,
                lastName : lastName,
                email : email,
                image : image,
                password : password
            },{
                where : { id : id }
            })

          const userDataUpdate =  await db.User.findByPk(id)

            const response = {
                statusCode: 201,
                msg : 'Usuario actualizado correctamente',
                userDataUpdate : userDataUpdate
            }
            res.status(201).json({ response });
        }

    } catch (err) {
        const response = {
            status : 500,
            msg :'internal server error'
        }
        res.status(500).json({ response })
    }
}


module.exports = {userUpdate}
