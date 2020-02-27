const BaseModel = require('../../modules/base')

class BaseController {
    /**
     * 
     * @param ctx
     * @returns {Promise.<void>}
     */
    
    static async create(ctx) {
        let req = ctx.request.body;

        let detail = await BaseModel.detail();
        if (req) {
            try {
                if(!detail){
                    const ret = await BaseModel.createBase(req);
                }else{
                    let {sitename, hotphone,keywords,descript,copyright, email,ewm, logo, waplogo, address, enaddress, banner , wapbanner} = ctx.request.body;
                    
                    let params = {
                        sitename,
                        hotphone,
                        email,
                        ewm,
                        address,
                        enaddress,
                        banner,
                        wapbanner,
                        logo,
                        waplogo,
                        keywords,
                        descript,
                        copyright
                    }
                    await BaseModel.update(params);
                }
                
                ctx.response.status = 200;
                ctx.body = {
                    code: 200,
                    msg: '成功',
                }

            } catch (err) {
                ctx.response.status = 200;
                ctx.body = {
                    code: 412,
                    msg: '服务器错误',
                    data: err
                }
            }
        } else {
            ctx.response.status = 200;
            ctx.body = {
                code: 416,
                msg: '请填写必填项',
            }
        }

    }

    /**
     * 查询
     * @param ctx id  
     *
     * @returns 
     */
    static async detail(ctx) {
        try {

            let data = await BaseModel.detail();
            ctx.response.status = 200;
            ctx.body = {
                code: 200,
                msg: `成功`,
                data
            }

        } catch (err) {
            ctx.response.status = 500;
            ctx.body = {
                code: 500,
                msg: `失败`,
                data: err
            }
        }

    }


     /**
     * 查询
     * @param ctx id  
     *
     * @returns 
     */
    static async findbanner(ctx) {
        try {

            let data = await BaseModel.detail();
            ctx.response.status = 200;
            ctx.body = {
                code: 200,
                msg: `成功`,
                data:data.banner?JSON.parse(data.banner):'',
                count:data.banner?JSON.parse(data.banner).length:''
            }

        } catch (err) {
            ctx.response.status = 500;
            ctx.body = {
                code: 500,
                msg: `失败`,
                data: err
            }
        }

    }





    /**
     * 更新
     * @param ctx hotphone         
     * @param ctx accuse     
     * @param ctx emai     
     * @param ctx ewm             
     * @param ctx worktime         
     * @param ctx address         
     * @param ctx banner        
     *
     * @returns 更新成功则返回更新后的数据，失败返回更新失败的原因
     */
    static async update(ctx) {
        // 接收参数
        let {sitename, hotphone,title,keywords,descript,copyright, emai,ewm, logo, waplogo, address,enaddress, banner , wapbanner} = ctx.request.body;

        let params = {
            sitename,
            hotphone,
            title,
            emai,
            ewm,
            address,
            banner,
            wapbanner,
            logo,
            waplogo,
            keywords,
            descript,
            copyright
        }

        try {
            await BaseModel.update(params);

            ctx.response.status = 200;
            ctx.body = {
                code: 200,
                msg: `更新成功`,
            }

        } catch (err) {
            ctx.response.status = 500;
            ctx.body = {
                code: 500,
                msg: `更新失败`,
                data: err
            }
        }
    }
    

   
}

module.exports = BaseController
