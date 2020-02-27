const router = require('koa-router')()
module.exports = (app) => {
    
    router.get( '/', app.controller.home.index )

    router.get( '/about', app.controller.home.about )

    router.get( '/mien', app.controller.home.mien )

    router.get( '/honor', app.controller.home.honor )

    router.get( '/product', app.controller.home.product )

    router.get( '/proshow', app.controller.home.proshow )

    router.get( '/news', app.controller.home.news )

    router.get( '/tradenews', app.controller.home.tradenews )

    router.get( '/news_show', app.controller.home.news_show )

    router.get( '/contact', app.controller.home.contact )

    router.get( '/feedback', app.controller.home.feedback )

    router.get( '/culture', app.controller.home.culture )

    router.get( '/speech', app.controller.home.speech )


    app.use(router.routes())
    .use(router.allowedMethods())
}