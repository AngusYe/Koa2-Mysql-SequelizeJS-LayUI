const db = require('../config/db');
const Sequelize = db.sequelize;
const Op = db.Sequelize.Op
const User = Sequelize.import('../schema/user');
User.sync({force: false});

class UserModel {
    /**
     * 创建
     * @param data
     * @returns {Promise<*>}
     */
    static async createUser(data) {
        return await User.create(data)
    }
    /**
    **
    * 查询
    * @param username  
    * @returns {Promise.<*>}
    */
   static async findUserByName (username) {
     const userInfo = await User.findOne({
       where: {
         username
       }
     })
     return userInfo
   }

   /**
    **
    * 查询
    * @param username  
    * @returns {Promise.<*>}
    */
   static async detail (id) {
    const Info = await User.findOne({
      where: {
        id
      }
    })
    return Info
  }

  static async getdetail (nickname) {
    const Info = await User.findOne({
      where: {
        nickname
      }
    })
    return Info
  }

 


   /**
     * 删除
     * @param id listID
     * @returns {Promise.<boolean>}
     */
    static async delete(id) {
        await User.destroy({
            where: {
                id,
            }
        })
        return true
    }

     /**
     * 更新
     * @param id 
     * @param data 
     */
    static async update(data,username) {
        return await User.update(data, {
            where: {
                username
            },
            fields: ['nickname', 'pwd','createdAt', 'updatedAt']
        });
    }


    /**
     * 获取
     * @param params name 
     * @returns {Promise<*>}
     */
    static async list(params) {
        let ret = null;
        let {page = 1, limit = 10, title} = params;
        
        ret = await User.findAndCountAll({
            'limit': parseInt(limit),
            'offset': (page - 1) * limit
        });
        
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


    
}

module.exports = UserModel
