//测试环境
module.exports = {
    env: 'test',        //环境名称
    LogLevel:'error', //日志记录级别
    port: 3002,         //服务端口号
    base_url: '',    //baseurl
    redis_url: '',       //redis地址
    redis_port: '',      //redis端口号
    njconfig:{
        trimBlocks: true  //nunjucks config
    }
}