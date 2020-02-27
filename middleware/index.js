const path = require('path')
const ip = require("ip")
const bodyParser = require('koa-bodyparser')
const nunjucks = require('koa-nunjucks-2')
const staticFiles = require('koa-static')
const config = require('../config')
const miSend = require('./mi-send')
const miLog = require('./mi-log')
const miHttpError = require('./mi-http-error')
var compress = require('koa-compress')
const jwt = require('jsonwebtoken')
const jwtKoa = require('koa-jwt')
const koaBody = require('koa-body')
const session = require("koa-session2");
const refreshToken = require('../token/refreshToken')
const checkToken = require('../token/checkToken')

// 引入规则中件间
const miRule = require('./mi-rule')
const BaseModel = require('../modules/base')
var isgetBase = false;
//path.resolve 路径拼接，返回绝对路径，从右往左被处理的
module.exports = (app) => {


  app.use(session({
      key: "koa:sess",   //default "koa:sess"
      maxAge:24 * 60 * 60 * 1000,
      httpOnly: true,
      renew: true
  }));



  app.use(async (ctx, next) => {
      const overAllData = await BaseModel.detail();
      ctx.state.overAllData = overAllData
      ctx.state.base_url = config.base_url;
      ctx.state.user = ctx.session.nickname;
      await next()
      
  })

  
  
  app.use(koaBody({
    multipart: true
  }));

  app.use(miHttpError({
    errorPageFolder: path.resolve(__dirname, '../errorPage')
  }))

 
  app.use(miLog({
    env: app.env,
    projectName: 'koa2-tutorial',
    appLogLevel: config.LogLevel,
    dir: 'logs',
    serverIp: ip.address()
  }));

  app.use(staticFiles(path.resolve(__dirname, "../public"),{maxage: 30*24*60*60*1000}))

  app.use(nunjucks({
    ext: 'html',
    path: path.join(__dirname, '../views'),
    nunjucksConfig: config.njconfig,
    configureEnvironment: (env) => {
      env.addFilter('shorten', (str) => {
        return JSON.parse(str)
      });
      env.addFilter('money', (params) => {
        return (params/10000).toFixed(2)
      });
      env.addFilter('day', (str) => {
        return (str.split(' ')[0]).substr(8,2)
      });
      env.addFilter('yearmonth', (str) => {
        return (str.split(' ')[0]).substr(0,7)
      });
      env.addFilter('dayearmonth', (str) => {
        return str.split(' ')[0]
      });
    }
  }));
 

  app.use(bodyParser())
  app.use(miSend())

  app.use(compress({
    threshold: 2048
  }))

  
  
  miRule({
    app,
    rules: [
      {
        path: path.join(__dirname, '../controller'),
        name: 'controller'
      },
      {
        path: path.join(__dirname, '../service'),
        name: 'service'
      }
    ]
  })

  

  

   // response拦截器 检测jwt是否需要刷新
   app.use(async (ctx, next) => {
    
    const response = ctx.body
    if(response){
      if (ctx.request.header['authorization']) {
        const newToken = refreshToken(ctx.request.header['authorization'])
        if (newToken){
          ctx.response.setHeader('authorization', newToken);
        }
      }
    }
    await next()
    
  })


  app.use(checkToken)

  app.use(jwtKoa({secret: config.secret}).unless({path: [
    /^\/$/, 
    /^\/about/,
    /^\/mien/,
    /^\/honor/,
    /^\/product/,
    /^\/proshow/,
    /^\/culture/,
    /^\/news/,
    /^\/tradenews/,
    /^\/news_show/,
    /^\/contact/,
    /^\/speech/,
    /^\/feedback/,
    /^\/backend/,
    /^\/api\/login/,
    /^\/api\/reg/,
    /^\/api\/message/,
    /^\/api\/aboutinfo/,
    /^\/api\/articlelist/,
    /^\/api\/articleinfo/,
    /^\/api\/seriselist/,
    /^\/api\/getcode/,
    /^\/api\/productlist/,
    /^\/api\/productinfo/,
    /^\/api\/value/,
    /^\/api\/productfront/
  ]
}))
  
 


  // 增加错误的监听处理
  app.on("error", (err, ctx) => {
    
    if (ctx && !ctx.headerSent && ctx.status < 500) {
      ctx.status = 500
    }
    if (ctx && ctx.log && ctx.log.error) {
      if (!ctx.state.logged) {
        ctx.log.error(err.stack)
      }
    }
  }) 
}
