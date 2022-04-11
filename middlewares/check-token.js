
const jwt = require ('jwt-simple');


const checkToken = (req, res, next) => {
    if (!req.headers['user-token']){
        return res.json ({error: 'You need to include the user-token in the header'});
    }
    
    const userToken = req.headers['user-token'];
    let payload={};

    try {
        payload = jwt.decode(userToken, 'SECRETO');
    } catch (error) {
        return res.json({error: 'The token is wrong'});
    }
        next();

}

module.export =  checkToken