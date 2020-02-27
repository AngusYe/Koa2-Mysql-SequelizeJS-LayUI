const db = require('../config/db');
const Sequelize = db.sequelize;
const Op = db.Sequelize.Op
const Valuer = Sequelize.import('../schema/valuer');
const fs = require('fs')
const config = require('../config')
const filePath = config.upload_url;
Valuer.sync({force: false});

class ValuerModel {
    /**
     * 创建
     * @param data
     * @returns {Promise<*>}
     */
    static async createValuer(data) {
        return await Valuer.create(data)
    }

     /**
     * 删除
     * @param id listID
     * @returns {Promise.<boolean>}
     */
    static async delete(id) {

        if(typeof id == "object" && id.length >= 1){
            for(let i = 0;i<id.length;i++){
                await Valuer.destroy({
                    where: {
                        id:id[i]
                    }
                })
               
            }
            return true
        }else{
            await Valuer.destroy({
                where: {
                    id,
                }
            })
            return true
        }
    }


    /**
     * 获取
     * @param params name 
     * @returns {Promise<*>}
     */
    static async list(params) {
        let ret = null;
        const condition = {}
        let {page = 1, limit = 10, name ,startTime , endTime, status , title} = params;
        if(title){
            condition.title = {
                [Op.like]:'%' + title + '%'
            };
        }
        if(name){
            condition.name = {
                [Op.like]:'%' + name + '%'
            };
        }
        if(startTime && endTime){
            condition.createdAt = {
                [Op.lt]: new Date(endTime),
                [Op.gt] : new Date(startTime)
            }
        }else if(startTime){
            condition.createdAt = {
                [Op.gte] : startTime
            }
        }else if(endTime){
            condition.createdAt = {
                [Op.lte] : endTime
            }
        }
        

        if(Object.keys(condition).length != 0){
            ret = await Valuer.findAndCountAll({
                limit: parseInt(limit),
                offset: (page - 1) * limit,
                where: condition
            });
        }else{
            ret = await Valuer.findAndCountAll({
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
            total_pages: Math.ceil(ret.count / limit)
        }
    }

    /**
     * 更新
     * @param id ID
     * @param data 
     */
    static async update(data, id) {
        if(typeof id == "object" && id.length >= 1){
            for(let i = 0;i<id.length;i++){
                await Valuer.update(data, {
                    where: {
                        id:id[i]
                    }
                });
            }
            return true
        }else{
            return await Valuer.update(data, {
                where: {
                    id
                }
            });
        }
    }

    /**
     * 获取
     * @returns {Promise<Model>}
     */
    static async detail(id) {
        let ret = null;
        ret =  await Valuer.findOne({
                    where: {
                        id
                    }
                }).then(function(tagData){
                    return tagData.toJSON();
            })
        
        return ret
    }


    
}

module.exports = ValuerModel
