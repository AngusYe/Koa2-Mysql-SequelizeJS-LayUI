const jwt = require('jsonwebtoken')
const config = require('../config')

module.exports = function (userInfo) {
  const token = jwt.sign(userInfo, config.secret, { expiresIn: '6h' })
  return token
}