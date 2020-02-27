const db = require('../config/db');
const Sequelize = db.sequelize;
const Op = db.Sequelize.Op
const Article = Sequelize.import('../schema/article');
Article.sync({force: false});

class ArticleModel {
    /**
     * 创建
     * @param data
     * @returns {Promise<*>}
     */
    static async createArticle(data) {
        return await Article.create(data)
    }

     /**
     * 更新
     * @param id 信息ID
     * @param data 
     */
    static async update(data,id) {
        return await Article.update(data, {
            where: {
                id
            },
            fields: ['title', 'content','entitle', 'encontent','honer','createdAt', 'updatedAt']
        });
    }

    /**
     * 删除
     * @param id listID
     * @returns {Promise.<boolean>}
     */
    static async delete(id) {

        if(typeof id == "object" && id.length >= 1){
            for(let i = 0;i<id.length;i++){
                await Article.destroy({
                    where: {
                        id:id[i]
                    }
                })
            }
            return true
        }else{
            await Article.destroy({
                where: {
                    id,
                }
            })
            return true
        }
       
    }

    /**
     * 获取
     * @returns {Promise<Model>}
     */
    static async detail(id) {
        return await Article.findOne({
            where: {
                id,
            }
        })
    }

    /**
     * 获取
     * @param params title 
     * @returns {Promise<*>}
     */
    static async list(params) {
        let ret = null;
        const condition = {}
        let {page = 1, limit = 10, title,startTime , endTime, type} = params;
        if(type){
            condition.type = type
        }
        if(title){
            condition.title = {
                [Op.like]:'%' + title + '%'
            }
        }
        if(startTime && endTime){
            condition.updatedAt = {
                [Op.lte]: new Date(endTime),
                [Op.gte] : new Date(startTime)
            }
        }else if(startTime){
            condition.updatedAt = {
                [Op.gte] : startTime
            }
        }else if(endTime){
            condition.updatedAt = {
                [Op.lte] : endTime
            }
        }
      
        if(Object.keys(condition).length != 0){
            ret = await Article.findAndCountAll({
                limit: parseInt(limit),
                offset: (page - 1) * limit,
                where: condition
            });
        }else{
            ret = await Article.findAndCountAll({
                limit: parseInt(limit),
                offset: (page - 1) * limit,
            });
        }
        
        
        return {
            code: 0,
            msg:'success',
            data: ret.rows,
            curr: parseInt(page),
            count: ret.count,
            total: ret.count,
            total_pages: Math.ceil(ret.count / parseInt(limit))
        }
    }
}

module.exports = ArticleModel
