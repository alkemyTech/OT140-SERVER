const db = require('../models');

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
}

