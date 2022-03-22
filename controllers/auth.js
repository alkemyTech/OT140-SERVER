const jwt = require("jsonwebtoken");
const { User } = require("../models/");
require("dotenv").config();


//generate token
const generateToken = (user) => {
  user = {
    username: user.username,
    password: user.password,
  };
  return (token = jwt.sign(user, process.env.SECRET));
};

const getUserAuth = async (req, res) => {
  if (!req.headers['user-token']) {
    return res.status(401).json({
      error: 'Need to include user-token on the header'
    });
  }
  try {
    const userToken = req.headers['user-token'];
    const { uid } = jwt.verify(userToken, process.env.SECRET);
    const user = await User.findOne({ where: { id: uid } });
    if (!user) return res.status(404).json({ msg: 'Invalid token - User not found' });
    req.user = user;
    next();

  } catch (error) {
    return res.status(401).json({
      error: 'Error- Wrong TOKEN'
    });
  }
}
module.exports = {
  generateToken,
  getUserAuth
};