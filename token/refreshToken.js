const jwt = require('jsonwebtoken')
const config = require('../config')

module.exports = function (authorization) {
  const token = authorization.split(' ')[1]
  const decoded = jwt.decode(token)
  // 若jwt有效期少于5分钟 则刷新
  if (decoded.exp - new Date() / 1000 < 60 * 5) {
    const userInfo = {
      nick: decoded.nick,
      name: decoded.name
    }
    const newToken = jwt.sign(userInfo, config.secret, { expiresIn: '6h' })
    return newToken
  } else {
    return false
  }
}