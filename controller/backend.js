
module.exports = {
    welcome: async(ctx, next) => {
        let { app } = ctx;
        let news = await app.service.home.newsList({page:1,limit:5})
        await ctx.render("backend/welcome",{news:news})
    },
    login: async(ctx, next) => {
        let { app } = ctx;
        await ctx.render("backend/login")
    },
    reg: async(ctx, next) => {
        let { app } = ctx;
        await ctx.render("backend/reg")
    },
    loginout: async(ctx, next) => {
        ctx.cookies.set('nick','',{signed:false,maxAge:0})
        ctx.response.redirect("/backend/login")
    },
    basics: async(ctx, next) => {
        await ctx.render("backend/user-setting")
    },
    passwd: async(ctx, next) => {
        await ctx.render("backend/user-password-edit")
    },
    articlelist: async(ctx, next) => {
        let typeId = ctx.request.query.type
        await ctx.render("backend/article-list",{active:'articlelist',typeId:typeId})
    },
    siteinfo: async(ctx, next) => {
        await ctx.render("backend/setting-siteinfo")
    },
    addarticle: async(ctx, next) => {
        const { app } = ctx;
        let articleId = ctx.request.query.id;
        let typeId = ctx.request.query.type
        await ctx.render("backend/article-edit",{articleId:articleId,typeId:typeId})
    },
    message: async(ctx, next) => {
        await ctx.render("backend/message")
    },
    inquiry: async(ctx, next) => {
        await ctx.render("backend/inquiry")
    },
    about: async(ctx, next) => {
        const { app } = ctx;
        let aboutId = ctx.request.query.type
        await ctx.render("backend/about",{active:'about',aboutId:aboutId})
    },
    honner: async(ctx, next) => {
        const { app } = ctx;
        await ctx.render("backend/honner",{aboutId:3})
    },
    honer_edit: async(ctx, next) => {
        const { app } = ctx;
        await ctx.render("backend/banner_edit")
    },
    serise: async(ctx, next) => {
        const { app } = ctx;
        await ctx.render("backend/serise")
    },
    serise_add: async(ctx, next) => {
        const { app } = ctx;
        let seriseId = ctx.request.query.id
        await ctx.render("backend/serise_add",{seriseId:seriseId,seriseId:seriseId})
    },
    productadd: async(ctx, next) => {
        const { app } = ctx;
        let seriselist = await app.service.home.proserise({page:1,limit:10000});
        let productId = ctx.request.query.id
        await ctx.render("backend/productadd",{seriselist:seriselist,productId:productId})
    },
    productlist: async(ctx, next) => {
        const { app } = ctx;
        await ctx.render("backend/productlist")
    },
    setproduct: async(ctx, next) => {
        const { app } = ctx;
        let proserise = await app.service.home.proserise()
        await ctx.render("backend/setproduct",{proserise:proserise})
    },
    bannerinfo: async(ctx, next) => {
        const { app } = ctx;
        await ctx.render("backend/banner-setinfo")
    }
   
}