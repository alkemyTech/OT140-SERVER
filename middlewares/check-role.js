const { Role } = require('../models');

const checkRole = (role = "Admin") => {
    return async(req, res, next) =>{
        if(!req.user){
            return res.status(401).json({ msg: `user not logged in` });
        }
        Role.findOne({ where: { name: role } })
            .then(role => {
                if(!role) return res.status(404).json({ msg: 'Role not found' });
                if(req.user.roleId !== role.id){ return res.status(403).json({ msg: "You don't have permission to access this route" }); }
                next();
            })
            .catch(err => res.status(500).json({ msg: 'Error', err }));
    }
}
module.exports = checkRole;