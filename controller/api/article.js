const ArticleModel = require('../../modules/article')

class ArticleController {
    /**
     * 
     * @param ctx
     * @returns {Promise.<void>}
     */
    
    static async create(ctx) {
        let req = ctx.request.body;
        if (req.title) {
            try {
                if(req.id){
                    await ArticleModel.update(req,req.id);
                }else{
                    const ret = await ArticleModel.createArticle(req);
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
            await ArticleModel.delete(id);

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
     * 查询
     * @param ctx id  
     *
     * @returns 
     */
    static async detail(ctx) {
        let {id} = ctx.request.body;
        
        if (!id) {
            ctx.response.status = 412;
            ctx.body = {
                code: 412,
                msg: `id不能为空`
            }

            return false;
        }
        try {

            let data = await ArticleModel.detail(id);
            
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


    // list
    static async list(ctx) {
        let params = ctx.request.body;
        try {
            const data = await ArticleModel.list(params);
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
}

module.exports = ArticleController
