const jwt = require("jsonwebtoken");
const checkToken = (req, res, next) => {
  if (!req.headers["user-token"]) {
    return res.json({ error: "Need to include user-token on the header" });
  }

  const userToken = req.headers["user-token"];
  let payload = {};

  try {
    payload = jwt.decode(userToken, "keyword");
  } catch (error) {
    return res.json({ error: "Wrong TOKEN" });
  }
  next();
};
module.exports = { checkToken };
