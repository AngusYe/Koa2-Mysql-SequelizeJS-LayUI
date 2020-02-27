const BrandModel = require('../../modules/brand')

class BrandController {
    /**
     * 
     * @param ctx
     * @returns {Promise.<void>}
     */
    
    static async create(ctx) {
        let req = ctx.request.body;
        if (req.title && req.logo) {
            try {
                const ret = await BrandModel.createBrand(req);
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

        if (isNaN(id)) {
            ctx.response.status = 412;
            ctx.body = {
                code: 412,
                msg: `请传入正确的ID`
            }

            return false;
        }

        try {
            await BrandModel.delete(id);

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
            const data = await BrandModel.list(params);
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
        let params = ctx.request.body;
        let brandid = params.brandid;
        if (!brandid) {
            ctx.response.status = 412;
            ctx.body = {
                code: 412,
                msg: `type不能为空`
            }

            return false;
        }
        try {

            let data = await BrandModel.detail(brandid);
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
     * @returns 更新成功则返回更新后的数据，失败返回更新失败的原因
     */
    static async update(ctx) {
        // 接收参数
        let {brandid, status,hotcar,title,fulltitle,simplytitle,logo} = ctx.request.body;

        let params = {
            status,
            hotcar,
            title,
            fulltitle,
            simplytitle,
            logo
        }

        try {
            await BrandModel.update(params,brandid);

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

module.exports = BrandController
