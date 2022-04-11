const jwt = require('jwt-simple');
const moment = require('moment');

const generateToken = (user) => {
  const payload = {
    usarioId: user.id,
    createAt: moment().unix(),
    expiredAt: moment().add(5,'minutos').unix()
  }
  return jwt.encode(payload, 'SECRETO');
};

module.exports = { generateToken };