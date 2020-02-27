const ProductModel = require('../../modules/product')

class ProductController {
    /**
     * 
     * @param ctx
     * @returns {Promise.<void>}
     */
    
    static async create(ctx) {
        let req = ctx.request.body;
        if (req) {
            try {
                if(req.id){
                    await ProductModel.update(req,req.id);
                }else{
                    const ret = await ProductModel.createProduct(req);                    
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
            await ProductModel.delete(id);

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
            const data = await ProductModel.list(params);
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
     * 获取前端产品
     * @param ctx
     *
     * @returns 列表数据
     */
    static async front(ctx) {
        let params = ctx.request.body;
        try {
            const data = await ProductModel.front(params);
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
     * 查询
     * @param ctx id  
     *
     * @returns 
     */
    static async detail(ctx) {
        let {id} = ctx.request.body;
        // 检测是否传入ID
        if (!id) {
            ctx.response.status = 412;
            ctx.body = {
                code: 412,
                msg: `type不能为空`
            }

            return false;
        }
        try {

            let data = await ProductModel.detail(id);
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
     * 更新车辆数据
     * @param ctx         
     *
     * @returns 更新成功，失败返回更新失败的原因
     */
    static async update(ctx) {
        let params = ctx.request.body;
        let inproarr = params.inproarr;

        // 接收参数

        try {
            const data = await ProductModel.updatepro(params);

            ctx.response.status = 200;
            ctx.body = {
                code: 200,
                msg: `成功`
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

module.exports = ProductController
