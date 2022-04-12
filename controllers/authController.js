const db = require('../models');
const bcrypt = require ('bcryptjs')
const { validationResult } = require ('express-validator');


module.exports = {
    login:(req, res) => {
        
    let errors = validationResult(req);
        //Check Validations errors
        if (errors.isEmpty()){
            //If there are no errors, look for email user in db
            db.User.findOne({
            where: {email: req.body.email}
            })
            .then(user => {
                //Message if user does not exist
                if (!user) {
                res.status(404).json({ ok: false})
                } else {
                // If the user is ok, compare the user password with form password
                    if (bcrypt.compareSync(req.body.password, user.password)) {
                    //If password is ok, return user
                    res.status(200).json({ user: user })
                    } else {
                    //Message for wrong password
                        res.status(404).json({ ok: false})
                    }
                }
            })
            .catch(err => {res.status(500).json(err)})  
        //Show validations errors
        } else {
            res.status(500).json(errors.mapped())
        }
    }
}