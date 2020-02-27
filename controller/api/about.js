const AboutModel = require('../../modules/about')

class AboutController {
    /**
     * 创建
     * @param ctx
     * @returns {Promise.<void>}
     */
    
    static async create(ctx) {
        let req = ctx.request.body;
        if (req) {
            try {
                let data = await AboutModel.detail(req.typeid);
                if(data){
                    await AboutModel.update(req,req.typeid);
                }else{
                    await AboutModel.createAbout(req);
                }
               
                ctx.response.status = 200;
                ctx.body = {
                    code: 200,
                    msg: '成功',
                    
                }

            } catch (err) {
                console.log(err)
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
     * 删除
     * @param ctx id 
     * @returns  删除成功返回true，失败返回错误原因
     */
    static async delete(ctx) {
        let {id} = ctx.request.body;

        // 检测是否传入ID
        if (!id) {
            ctx.response.status = 412;
            ctx.body = {
                code: 412,
                msg: `ID不能为空`
            }

            return false;
        }

        try {
            await AboutModel.delete(id);

            ctx.response.status = 200;
            ctx.body = {
                code: 200,
                msg: "删除成功"
            }

        } catch (err) {
            ctx.response.status = 500;
            ctx.body = {
                code: 500,
                msg: err
            }
        }
    }


    /**
     * 查询详情
     * @param ctx id  
     *
     * @returns 
     */
    static async detail(ctx) {
        let {typeid} = ctx.request.body;
     
        if (!typeid) {
            ctx.response.status = 412;
            ctx.body = {
                code: 412,
                msg: `type不能为空`
            }

            return false;
        }
        try {

            let data = await AboutModel.detail(typeid);
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
     * 更新
     * @param ctx                 
     *
     * @returns 更新成功
     */
    static async update(ctx) {
        // 接收参数
        let {barid, status} = ctx.request.body;

        let params = {
            status
        }

        try {
            await AboutModel.update(params,barid);

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

module.exports = AboutController
