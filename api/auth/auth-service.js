const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../../config/secrets');

module.exports = {
  isValid,
  makeToken
};

function isValid(user) {
  return Boolean(user.username && user.password && typeof user.password === "string");
}

function makeToken(user) {
  const payload = {
    subject: user.id,
    username: user.username
  }
  const options = {
    expiresIn: '900s',
  }
  return jwt.sign(payload, jwtSecret, options)
}