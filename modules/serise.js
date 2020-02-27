const db = require('../config/db');
const Sequelize = db.sequelize;
const Op = db.Sequelize.Op
const Serise = Sequelize.import('../schema/serise');
Serise.sync({force: false});

class SeriseModel {
    /**
     * 创建
     * @param data
     * @returns {Promise<*>}
     */
    static async createSerise(data) {
        return await Serise.create(data)
    }

    /**
     * 查询
     * @param id  
     * @returns {Promise<Model>}
     */
    static async detail(id) {

        return await Serise.findOne({
            where: {
                id,
            }
        })
    }

    /**
     * 删除
     * @param id listID
     * @returns {Promise.<boolean>}
     */
    static async delete(id) {
        await Serise.destroy({
            where: {
                id,
            }
        })
        return true
    }

    /**
     * 获取
     * @param params title 
     * @returns {Promise<*>}
     */
    static async list(params) {
        let ret = null;
        const condition = {}
        let {page = 1, limit = 10, serisename} = params;
        
        if(serisename){
            condition.name = {
                [Op.like]:'%' + serisename + '%'
            }
        }

        ret = await Serise.findAndCountAll({
            limit: parseInt(limit),
            offset: (page - 1) * limit,
            where: condition
        });
        
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
     * 更新
     * @param id 
     * @param data 
     */
    static async update(data,id) {
        return await Serise.update(data, {
            where: {
                id
            }
        });
    }


    
}

module.exports = SeriseModel
