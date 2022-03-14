const { User, Role } = require('../models');

const checkIsAdmin = ( req, res, next ) => {
    if( req.uuid ){
        try {
            
            // search roleId for 'Admin' Role
            const role = await User.findOne({ where: { name: 'Admin' }});
            if( !role ) return res.status(404).json({ msg: 'Role admin not found. Please, ask to an admin for create an admin role.' });
            // verify if user is 'Admin'
            if( req.user.roleId !== role.id ) return res.status(403).json({ msg: 'This user doesn\'t have permission to join this area'}); 
            next();
        }
    }else{
        //response with login is needed for continue
        res.status(401).json({ msg: 'Login is required. Please reauthenticate and try again' });        

    }
}

module.exports = checkIsAdmin