module.exports = {
    env: 'development', //环境名称
    LogLevel:'debug', //日志记录级别
    port: 80,         //服务端口号
    base_url: 'http://localhost',    //base_url
    redis_url: '',       //redis地址
    redis_port: '',      //redis端口号
    upload_url:"C:/keson/public",//文件上传路径
    njconfig:{
        trimBlocks: true,  //nunjucks config
        tags: {
            variableStart: '<$',
            variableEnd: '$>'
        },
        noCache:true
    },
    secret: 'szkeson'

}