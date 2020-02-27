const router = require('koa-router')()
const UserModel = require('../controller/api/user')
const BaseModel = require('../controller/api/base')
const ArticleModel = require('../controller/api/article')
const AdviceModel = require('../controller/api/advice')
const AboutModel = require('../controller/api/about')
const SeriseModel = require('../controller/api/serise')
const ProductModel = require('../controller/api/product')
const ValueModel = require('../controller/api/valuer')
router.prefix('/api')

module.exports = (app) => {
//api section

  router.post('/reg', UserModel.create)

  router.post('/login', UserModel.postLogin)

  router.post('/pwdup', UserModel.update)

  router.post('/base', BaseModel.create)

  router.post('/baseinfo', BaseModel.detail)

  router.post('/fbanner', BaseModel.findbanner)

  router.post('/article', ArticleModel.create)

  router.post('/articleinfo', ArticleModel.detail)

  router.post('/articlelist', ArticleModel.list)

  router.post('/articledel', ArticleModel.delete)

  router.post('/message', AdviceModel.create)

  router.post('/messagelist', AdviceModel.list)

  router.post('/messageinfo', AdviceModel.detail)

  router.post('/messagedel', AdviceModel.delete)

  router.post('/messageup', AdviceModel.update)

  router.post('/about', AboutModel.create)

  router.post('/aboutinfo', AboutModel.detail)


  router.post('/serise', SeriseModel.create)
  
  router.post('/seriseinfo', SeriseModel.detail)

  router.post('/seriselist', SeriseModel.list)

  router.post('/serisedel', SeriseModel.delete)

  router.post('/product', ProductModel.create)
  
  router.post('/productinfo', ProductModel.detail)

  router.post('/productlist', ProductModel.list)

  router.post('/productfront', ProductModel.front)

  router.post('/productdel', ProductModel.delete)

  router.post('/productup', ProductModel.update)

  router.post('/value', ValueModel.create)
  
  router.post('/valueinfo', ValueModel.detail)

  router.post('/valuelist', ValueModel.list)

  router.post('/valuedel', ValueModel.delete)

  router.post('/valueup', ValueModel.update)

  router.post('/uploadfiles', app.controller.api.uploadfiles);
  
  router.post('/delfiles', app.controller.api.delfiles);

  router.post('/readFiles', app.controller.api.readFiles);

  router.get('/getcode', app.controller.api.getCode);


    app.use(router.routes())
    .use(router.allowedMethods())

}