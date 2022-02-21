// const {User} = require('../models/user')
const bcrypt = require("bcrypt");
const {User} = require('../models/index')



const signUp = async (req, res, next) => {
    
    try{
        const {firstName, lastName, email, password} = req.body
        const salt = await bcrypt.genSalt(10)
        const savedUser = await User.create({
            firstName,
            lastName,
            email,
            password: await bcrypt.hash(password, salt)
        })
        return res.json(savedUser).status(201)

    }catch(err){
        console.log(err)
    }
}

module.exports = {signUp}