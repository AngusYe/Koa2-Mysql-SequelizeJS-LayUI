const db = require('../config/db');
const Sequelize = db.sequelize;
const Op = db.Sequelize.Op
const About = Sequelize.import('../schema/about');
About.sync({force: false});

class AboutModel {
    /**
     * 创建
     * @param data
     * @returns {Promise<*>}
     */
    static async createAbout(data) {
        return await About.create(data)
    }


  
     /**
     * 更新
     * @param id 信息ID
     * @param data 
     */
    static async update(data,typeid) {

        return await About.update(data, {
            where: {
                typeid
            }
        });
    }


    /**
     * 获取
     * @returns {Promise<Model>}
     */
    static async detail(typeid) {
        return await About.findOne({
            where: {
                typeid,
            }
        })
    }

    /**
     * 删除
     * @param id listID
     * @returns {Promise.<boolean>}
     */
    static async delete(id) {
        return  await About.destroy({
            where: {
                id,
            }
        })
    }


    
}

module.exports = AboutModel
