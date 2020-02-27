module.exports = {
    env: 'prd', //环境名称
    port: 3099,         //服务端口号
    LogLevel:'error', //日志记录级别
    base_url: 'http://xxxxxxxxxxxx',    //请求的base_url 
    upload_url:'',
    redis_url: '',       //redis地址
    redis_port: '',      //redis端口号
    njconfig:{
        trimBlocks: true,  //nunjucks config
        tags: {
            variableStart: '<$',
            variableEnd: '$>'
        }
    },
    secret: 'wanmai'
}