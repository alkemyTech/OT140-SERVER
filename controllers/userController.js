const db = require("../models/index");


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
