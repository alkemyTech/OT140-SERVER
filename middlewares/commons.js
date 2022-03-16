const validator = require('validator');

const checkFieldRequired = (reqObj, field) => {
  return (req, res, next) => {
    if (!req[reqObj][field]) {
      return res.status(400).json(`Field  '${field}'  is required`);
    }
    next();
  };
};

// Validations for check is number, string or boolean
const checkTypeField = (reqObj, field, type = "number") => {
  return (req, res, next) => {    
    if (req[reqObj][field]) {
      if (req[reqObj][field] === null || req[reqObj][field] === undefined || req[reqObj][field].trim() === "") {
        return res.status(400).json(`Field '${field}' can't be null or empty`);
      }
      if (type === "number") {
        if (!isNaN(req[reqObj][field].trim())) {
          return next();
        }
      }
      if (type === "boolean") {
          console.log("estoy en boole")
          console.log(req[reqObj][field]);
        if (typeof JSON.parse(req[reqObj][field].trim()) === "boolean") {
            console.log("soy?");
          return next();
        }
      }
      if (type === "string" && typeof req[reqObj][field] === "string") {
        return next();
      }
      return res.status(400).json(`Field '${field}' isn't type ${type.toUpperCase()}`);
    }
    next();
  };
};
const checkLength = (reqObj, field, exactLength = null, minLength = 1, maxLength = 3) => 
(req, res, next) => {
  if(!req[reqObj][field]) return next();
  if (exactLength && !isNaN(exactLength)) {
    if (req.body[field].length !== exactLength) {
      return res.status(400).json(`Field '${field}' must have ${exactLength} characters`);
    }
  } else {
    if (req.body[field].length < minLength || req.body[field].length > maxLength) {
      return res.status(400).json(`Field '${field}' must have between ${minLength} and ${maxLength} characters`);
    }
  }
next();
}

checkIsEmail = (reqObj, field) => {
    return (req, res, next) => {
        if( req[reqObj][field] && !validator.isEmail(req[reqObj][field]) )return res.status(400).json(`Field '${field}' is not an Email`)
        return next();
    }
}

const checkIsAdminLogged = (req, res, next) => {
  const user = req.user;
  if (!user){
    //check if the token was generated
    res.status(403).json({msg: "You must be logged in"});
  } 
  if (user.roleId !== 1 ) return res.status(403).json({ msg: 'Only admin can access this page' });
  
  next();
}


module.exports = {
  checkFieldRequired,
  checkTypeField,
  checkLength,
  checkIsEmail,
  checkIsAdminLogged
};
