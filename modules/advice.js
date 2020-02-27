const db = require('../config/db');
const Sequelize = db.sequelize;
const Op = db.Sequelize.Op
const Advice = Sequelize.import('../schema/advice');
Advice.sync({force: false});

class AdviceModel {
    /**
     * 创建模型
     * @param data
     * @returns {Promise<*>}
     */
    static async createAdvice(data) {
        return await Advice.create(data)
    }

    /**
     * 获取列表
     * @param params title 关键字
     * @returns {Promise<*>}
     */
    static async list(params) {
        let ret = null;
        const condition = {}
        let {page = 1, limit = 10, name ,startTime , endTime ,status,phone } = params;
        if(phone){
            condition.phone =  {
                [Op.like]:'%' + phone + '%'
            };
        }
        if(status){
            condition.status = status;
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
                [Op.lt]: new Date(),
                [Op.gt] : startTime
            }
        }else if(endTime){
            condition.createdAt = {
                [Op.lt] : new Date(endTime)
            }
        }

        if(Object.keys(condition).length != 0){
            ret = await Advice.findAndCountAll({
                limit: parseInt(limit),
                offset: (page - 1) * limit,
                where: condition
            });
        }else{
            ret = await Advice.findAndCountAll({
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

    /**
     * 删除
     * @param id listID
     * @returns {Promise.<boolean>}
     */
    static async delete(id) {
        if(typeof id == "object" && id.length >= 1){
            for(let i = 0;i<id.length;i++){
                await Advice.destroy({
                    where: {
                        id:id[i]
                    }
                })
            }
            return true
        }else{
            return  await Advice.destroy({
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
                await Advice.update(data, {
                    where: {
                        id:id[i]
                    }
                });
            }
            return true
        }else{
            return await Advice.update(data, {
                where: {
                    id
                }
            });
        }
    }


}

module.exports = AdviceModel
