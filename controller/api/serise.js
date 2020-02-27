const SeriseModel = require('../../modules/serise')

class SeriseController {
    /**
     * 
     * @param ctx
     * @returns {Promise.<void>}
     */
    
    static async create(ctx) {
        let req = ctx.request.body;
        if (req.name) {
            try {
                if(req.id){
                    await SeriseModel.update(req,req.id);
                }else{
                    const ret = await SeriseModel.createSerise(req);
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
            await SeriseModel.delete(id);

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
     * 获取列表
     * @param ctx
     *
     * @returns 列表数据
     */
    static async list(ctx) {
        let params = ctx.request.body;
        try {
            const data = await SeriseModel.list(params);
            ctx.response.status = 200;
            ctx.body = data

        } catch (err) {
            ctx.response.status = 500;
            ctx.body = {
                code: 500,
                msg: `查询列表失败`,
                data: err
            }
        }
    }

    /**
     * 查询信息详情
     * @param ctx id  文章ID
     *
     * @returns 信息的详情
     */
    static async detail(ctx) {
        let {id} = ctx.request.body;
        // 检测是否传入ID
        if (!id) {
            ctx.response.status = 412;
            ctx.body = {
                code: 412,
                msg: `seriseid不能为空`
            }

            return false;
        }
        try {

            let data = await SeriseModel.detail(id);
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

   

   
}

module.exports = SeriseController
