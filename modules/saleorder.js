const db = require('../config/db');
const Sequelize = db.sequelize;
const Op = db.Sequelize.Op
const Sale = Sequelize.import('../schema/saleorder');
Sale.sync({force: false});

class SaleModel {
    /**
     * 创建
     * @param data
     * @returns {Promise<*>}
     */
    static async createSale(data) {
        return await Sale.create(data)
    }


    /**
     * 获取
     * @param params name 
     * @returns {Promise<*>}
     */
    static async list(params) {
        let ret = null;
        const condition = {}
        let {page = 1, limit = 10, name ,startTime , endTime,city} = params;
        if(name){
            condition.phone = {
                [Op.like]:'%' + name + '%'
            };
        }
        if(city){
            condition.city = city;
        }
        if(startTime && endTime){
            condition.createdAt = {
                [Op.lt]: new Date(endTime),
                [Op.gt] : new Date(startTime)
            }
        }else if(startTime){
            condition.createdAt = {
                [Op.lt]: new Date(),
                [Op.gt] : startTime
            }
        }else if(endTime){
            condition.createdAt = {
                [Op.lt] : new Date(endTime)
            }
        }

        if(Object.keys(condition).length != 0){
            ret = await Sale.findAndCountAll({
                limit: parseInt(limit),
                offset: (page - 1) * limit,
                where: condition
            });
        }else{
            ret = await Sale.findAndCountAll({
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
     * 删除
     * @param id listID
     * @returns {Promise.<boolean>}
     */
    static async delete(id) {
        if(typeof id == "object" && id.length >= 1){
            for(let i = 0;i<id.length;i++){
                await Sale.destroy({
                    where: {
                        id:id[i]
                    }
                })
            }
            return true
        }else{
            return  await Sale.destroy({
                where: {
                    id,
                }
            })
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
                await Sale.update(data, {
                    where: {
                        id:id[i]
                    }
                });
            }
            return true
        }else{
            return await Sale.update(data, {
                where: {
                    id
                }
            });
        }
        
    }




    
}

module.exports = SaleModel
