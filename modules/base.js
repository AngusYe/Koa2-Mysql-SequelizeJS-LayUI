// 引入刚刚在第五点建立连接mysql数据库的db.js文件
const db = require('../config/db');
// 引入Sequelize对象
const Sequelize = db.sequelize;
const Op = db.Sequelize.Op
// 引入上一步的砍价数据表模型文件
const Base = Sequelize.import('../schema/base');
// 自动创建表
Base.sync({force: false});

class BaseModel {
    /**
     * 创建
     * @param data
     * @returns {Promise<*>}
     */
    static async createBase(data) {
        return await Base.create(data)
    }

     /**
     * 更新
     * @param id 
     * @param data 
     */
    static async update(data) {
        return await Base.update(data,{
            where: {
                id:1
            }
        });
    }

   

    /**
     * 获取
     * @returns {Promise<Model>}
     */
    static async detail() {
        let basesMsg = null;
        
        basesMsg =  await Base.findOne({
                    where: {
                        id:1
                    }
                }).then(function(tagData){
                    if(tagData){
                        return tagData.toJSON();
                    }else{
                        return null
                    }
            })
        
        
        return basesMsg
    }

    



 


    
}

module.exports = BaseModel
