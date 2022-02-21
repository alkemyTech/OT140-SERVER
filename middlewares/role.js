const Role = require('../models').Role;

const checkIsAdmin = async(req, res, next) => {
/* validate if user is admin */

    try {

        // obtaning the Admin role id from db
        const roleId = await Role.findOne({ 
            attributes: ['id'],
            where:{
                name: 'Admin'
            }
        });
        // if admin role is not found
        if(!roleId){
            return res.status(409).json({ message: 'Admin Role not found' });
        }
        // validating if user logged in is admin
        if (roleId.dataValues.id == req.body.roleId){
            next();
        }else{
            res.status(401).json({message: 'Unauthorized user role'});
        }

    }catch(err) {
        console.log(err);
        res.status(500).json({message: 'Internal server error'});
    }
    
}
module.exports = {
    checkIsAdmin
    };
