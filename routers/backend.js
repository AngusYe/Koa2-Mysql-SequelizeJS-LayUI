const router = require('koa-router')()
const UserModel = require('../modules/user')
router.prefix('/backend')

router.use(async (ctx,next)=>{
  const { app } = ctx;
  const nickname = ctx.cookies.get('nick');
  if(!nickname && ctx.request.url != '/backend/login'){
    ctx.response.redirect('/backend/login');
  }
  await  next()
})
module.exports = (app) => {

  //backend
  router.get( '/', app.controller.home.backend )

  router.get( '/login', app.controller.backend.login )

  router.get( '/reg', app.controller.backend.reg )

  router.get( '/welcome', app.controller.backend.welcome )

  router.get( '/loginout', app.controller.backend.loginout )

  router.get( '/basics', app.controller.backend.basics )

  router.get( '/passwd', app.controller.backend.passwd )

  router.get( '/articlelist', app.controller.backend.articlelist )

  router.get( '/addarticle', app.controller.backend.addarticle )

  router.get( '/siteinfo', app.controller.backend.siteinfo )

  router.get( '/message', app.controller.backend.message )

  router.get( '/inquiry', app.controller.backend.inquiry )

  router.get( '/about', app.controller.backend.about )

  router.get( '/honner', app.controller.backend.honner )

  router.get( '/serise', app.controller.backend.serise )

  router.get( '/serise_add', app.controller.backend.serise_add )

  router.get( '/productadd', app.controller.backend.productadd )

  router.get( '/productlist', app.controller.backend.productlist )
  
  router.get( '/setproduct', app.controller.backend.setproduct )

  router.get( '/bannerinfo', app.controller.backend.bannerinfo )

  router.get( '/honer_edit', app.controller.backend.honer_edit )

 
  
  
    

    
    app.use(router.routes())
    .use(router.allowedMethods())
}