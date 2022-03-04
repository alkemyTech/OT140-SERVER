const db = require('../models');
const bcrypt = require("bcrypt");
module.exports = {
    delete(req, res) {
     const { id } = req.params

      db.User.findByPk(id)
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
        const savedUser = User.create({
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
