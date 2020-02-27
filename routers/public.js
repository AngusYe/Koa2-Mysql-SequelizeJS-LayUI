const router = require('koa-router')()
const config = require('../config')
// router.use(async (ctx,next)=>{
//   const language = ctx.cookies.get('wanmailanguage') || 'cn';
//   ctx.state.language = language;
//   console.log('123234234234234',language)
//   await  next()
// })
module.exports = (app) => {
    router.all('/*',async(ctx, next) => {
        const { app } = ctx;
        const language = ctx.cookies.get('wanmailanguage') || 'cn';
        const name = ctx.cookies.get('nick');
        ctx.state.language = language;
        ctx.state.name = name;
        await next()
    })
  app.use(router.routes())
     .use(router.allowedMethods())
}