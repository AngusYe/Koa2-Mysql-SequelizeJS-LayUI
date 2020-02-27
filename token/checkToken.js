const jwt = require('jsonwebtoken')
const config = require('../config/index')
const refreshToken = require('../token/refreshToken')
module.exports = async (ctx, next) => {
  //拿到token
  try{
    const token = ctx.request.headers['authorization'] // 获取jwtAuthorization
    if(token) {
      try {
        let payload = jwt.verify(token.split(' ')[1], config.secret)  // 解密payload，获取用户名和ID
      } catch (err) {
        if(jwt.decode(token.split(' ')[1]).exp - new Date() / 1000 < 60 * -60){
          ctx.cookies.set('userToken','',{signed:false,maxAge:0})
          ctx.throw(401, 'need authorization')
        }else{
          const newToken = refreshToken(token)
          if (newToken){
            ctx.response.set('authorization', newToken);
          }
        }
        
      }
    }
    await next()
  }catch(err){
    console.log('Token_error',err)
    if (err.status === 401) {
      ctx.response.status = 200;
      ctx.body = {
        code: -2,
        msg: '请登陆'
      }
    } else {
      // ctx.response.redirect('/backend/login');
      ctx.response.status = 200;
      ctx.body = {
        code: -1,
        msg: '认证失败'
      }
    }
    
  }

}