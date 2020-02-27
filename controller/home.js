
module.exports = {
  index: async(ctx, next) => {
    const { app } = ctx;
    let aboutUs = await app.service.home.aboutUs({typeid:1})
    let news = await app.service.home.newsList({page:1,limit:3,type:2})
    let lastnews = await app.service.home.newsList({page:1,limit:1})
    let productfront = await app.service.home.getProcuctFront()
    await ctx.render("home/index", {active:'index',aboutUs:aboutUs.data,news:news,lastnews:lastnews.data[0],productfront:productfront.data})
    
  },
  about: async(ctx, next) => {
    const { app } = ctx;
    let aboutUs = await app.service.home.aboutUs({typeid:1})
    let news = await app.service.home.newsList({page:1,limit:2,type:2})
    await ctx.render("home/about", {active:'about',aboutUs:aboutUs.data,news:news})
    
  },
  mien: async(ctx, next) => {
    const { app } = ctx;
    let news = await app.service.home.newsList({page:1,limit:2,type:2})
    await ctx.render("home/mien", {active:'mien',news:news})
    
  },
  honor: async(ctx, next) => {
    const { app } = ctx;
    let news = await app.service.home.newsList({page:1,limit:2,type:2})
    let aboutUs = await app.service.home.aboutUs({typeid:3})
    await ctx.render("home/honor", {active:'honor',news:news,aboutUs:aboutUs})
    
  },
  product: async(ctx, next) => {
    const { app } = ctx;
    let seriseId = ctx.request.query.serise;
    let curpage = ctx.request.query.page;
    let proserise = await app.service.home.proserise()
    let productList = await app.service.home.getProcuct(seriseId?{seriseid:seriseId,limit:6,page:curpage}:{limit:6,page:curpage})
    let news = await app.service.home.newsList({page:1,limit:2,type:2})
    await ctx.render("home/pro", {active:'product',proserise:proserise,productList:productList,seriseId:seriseId,news:news})
    
  },
  proshow: async(ctx, next) => {
    const { app } = ctx;
    let productId = ctx.request.query.procode;
    let seriseId = ctx.request.query.serise;
    let product = await app.service.home.getProcuctCase({id:productId})
    let proserise = await app.service.home.proserise()
    let news = await app.service.home.newsList({page:1,limit:2,type:2})
    await ctx.render("home/pro_show", {active:'proshow',product:product.data,proserise:proserise,news:news,seriseId:seriseId})
    
  },
  news: async(ctx, next) => {
    const { app } = ctx;
    let curpage = ctx.request.query.page
    curpage = curpage?curpage:1
    let news = await app.service.home.newsList({page:curpage,limit:5,type:1})
    let productList = await app.service.home.getProcuct({limit:3,page:1})
    await ctx.render("home/news", {active:'news',news:news,type:1,productList:productList.data})
    
  },
  tradenews: async(ctx, next) => {
    const { app } = ctx;
    let curpage = ctx.request.query.page
    curpage = curpage?curpage:1
    let news = await app.service.home.newsList({page:curpage,limit:5,type:2})
    let productList = await app.service.home.getProcuct({limit:3,page:1})
    await ctx.render("home/news", {active:'tradenews',news:news,type:2,productList:productList.data})
    
  },
  news_show: async(ctx, next) => {
    const { app } = ctx;
    let newsId = ctx.request.query.id;
    let newtype = ctx.request.query.type;
    let newDetail = await app.service.home.newsdetail({id:newsId})
    let news = await app.service.home.newsList({page:1,limit:7})
    let productList = await app.service.home.getProcuct({limit:3,page:1})
    await ctx.render("home/news_show", {active:newtype==1?'news':'tradenews',newDetail:newDetail.data,news:news,productList:productList.data})
    
  },
  contact: async(ctx, next) => {
    const { app } = ctx;
    let news = await app.service.home.newsList({page:1,limit:2,type:2})
    await ctx.render("home/contact", {active:'contact',news:news})
    
  },
  feedback: async(ctx, next) => {
    const { app } = ctx;
    let news = await app.service.home.newsList({page:1,limit:2,type:2})
    await ctx.render("home/feedback", {active:'feedback',news:news})
    
  },
  culture: async(ctx, next) => {
    const { app } = ctx;
    let aboutUs = await app.service.home.aboutUs({typeid:4})
    let news = await app.service.home.newsList({page:1,limit:2,type:2})
    await ctx.render("home/culture", {active:'culture',aboutUs:aboutUs.data,news:news})
    
  },
  speech: async(ctx, next) => {
    const { app } = ctx;
    let aboutUs = await app.service.home.aboutUs({typeid:2})
    let news = await app.service.home.newsList({page:1,limit:2,type:2})
    await ctx.render("home/speech", {active:'speech',aboutUs:aboutUs.data,news:news})
    
  },
  //后台
  backend: async(ctx, next) => {
    const { app } = ctx;
    const name = ctx.session.nickname || ctx.state.name || ''
    
    if(name){
      await ctx.render("backend/index", {active:'backend',name:decodeURIComponent(decodeURIComponent(name))})
    }else{
      ctx.response.redirect('/backend/login');
    }
  }

}