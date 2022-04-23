const jwt = require("jsonwebtoken");

module.exports.createToken = (id) => {
  const maxAge = 3 * 24 * 60 * 60; //in seconds
  return jwt.sign({ id }, "Jad Pedro Federico Karim", {
    expiresIn: maxAge,
  });
};
