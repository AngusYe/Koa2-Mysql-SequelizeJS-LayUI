const SaleModel = require('../../modules/saleorder')

class saleController {
    /**
     * 创建
     * @param ctx
     * @returns {Promise.<void>}
     */
    
    static async create(ctx) {
        let req = ctx.request.body;
        if (req.phone) {
            try {
                const ret = await SaleModel.createSale(req);
                ctx.response.status = 200;
                ctx.body = {
                    code: 200,
                    msg: '成功',
                    
                }

            } catch (err) {
                ctx.response.status = 200;
                ctx.body = {
                    code: 412,
                    msg: '*网络错误',
                    data: err
                }
            }
        } else {
            ctx.response.status = 200;
            ctx.body = {
                code: 416,
                msg: '*请填写手机号码',
            }
        }

    }

    /**
     * 获取
     * @param ctx
     *
     * @returns 列表数据
     */
    static async list(ctx) {
        let params = ctx.request.body;
        try {
            const data = await SaleModel.list(params);
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
            await SaleModel.delete(id);

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
     * 更新数据
     * @param ctx                 
     *
     * @returns 更新成功则返回更新后的数据，失败返回更新失败的原因
     */
    static async update(ctx) {
        // 接收参数
        let {saleid, status} = ctx.request.body;

        let params = {
            status
        }

        try {
            await SaleModel.update(params,saleid);

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

module.exports = saleController
