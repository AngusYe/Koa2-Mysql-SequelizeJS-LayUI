const fs = require('fs')
const config = require('../config')
const svgCaptcha = require('svg-captcha')
function getSuffix (fileName) {
    return fileName.split('.').pop()
   }
   

function Rename (fileName) {
    return Math.random().toString(16).substr(2) + '.' + getSuffix(fileName)
}

module.exports = {
    uploadfiles: async(ctx, next) => {
        const { app } = ctx;
        const file = ctx.request.files.file;
       
        const reader = fs.createReadStream(file.path);
        
        let filePath = config.upload_url;
        let fileName = Rename(file.name)
        let fileResource = filePath+`/upload/${fileName}`;
        if(!fs.existsSync(filePath)){  //判断staic/upload文件夹是否存在，如果不存在就新建一个
            fs.mkdir(filePath,(err)=>{
                if(err){
                    throw new Error(err)
                }else{
                
                    let upstream = fs.createWriteStream(fileResource);
                    reader.pipe(upstream);
                    
                    ctx.response.body = {
                        code:200,
                        url:`/upload/${fileName}`
                    }
                }
            })
        }else{
            let upstream = fs.createWriteStream(fileResource)
            reader.pipe(upstream);
            ctx.response.body = {
                code:200,
                url:`/upload/${fileName}` 
            }
        }
    },
    delfiles: async(ctx, next) => {
        const { app } = ctx;
        const fileurl = ctx.request.body.url
        let filePath = config.upload_url;
        let fileResource = filePath+fileurl;
        if(fs.existsSync(fileResource)){ 
            fs.unlinkSync(fileResource, function(err){
                if(err){
                    throw new Error(err);
                }
            })
            ctx.response.status = 200;
            ctx.body = {
                code:200,
                msg:'success'
            }
        }else{
            ctx.response.status = 200;
            ctx.body = {
                code:-1,
                msg:'fail'
            }
        }
        
    },
    readFiles:async(ctx,next) => {
        const { app } = ctx;
        const fileurl = ctx.request.body.url
        let filePath = config.upload_url;
        let fileResource = filePath+fileurl;
        var fileDatas = null;
        if(fs.existsSync(fileResource)){ 
            var ms = image(fs.readFileSync(fileResource));
            ctx.response.status = 200;
            ctx.body = {
                code:200,
                msg:''
            }
        }else{
            ctx.response.status = 200;
            ctx.body = {
                code:-1,
                msg:'fail'
            }
        }
    },
    getCode : async(ctx,next) => {
        var code = svgCaptcha.create({
            // 翻转颜色
            inverse: false,
            ignoreChars: '0o1i',
            // 验证码字符中排除 0o1i
            // 字体大小
            fontSize: 38,
            // 噪声线条数
            noise: 2,
            // 宽度
            width: 90,
            // 高度
            height: 40,
            color:false
        });
        ctx.session.code = code.text;
        ctx.response.status = 200;
        ctx.body = code.data;
       
    }
}