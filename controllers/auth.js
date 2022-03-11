const jwt = require("jsonwebtoken");
require("dotenv").config();
//generate token
const generateToken = (user) => {
  user = {
    username: user.username,
    password: user.password,
  };
  return (token = jwt.sign(user, process.env.SECRET));
};

module.exports = { generateToken };