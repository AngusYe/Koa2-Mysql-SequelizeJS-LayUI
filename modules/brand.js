const db = require('../config/db');
const Sequelize = db.sequelize;
const Op = db.Sequelize.Op;
const Brand = Sequelize.import('../schema/brand');
const Gallery = Sequelize.import('../schema/gallery');
const Serise = Sequelize.import('../schema/serise');
const fs = require('fs');
const config = require('../config');
const filePath = config.upload_url;
Brand.sync({force: false});

class BrandModel {
    /**
     * 创建
     * @param data
     * @returns {Promise<*>}
     */
    static async createBrand(data) {
        return await Brand.create(data)
    }

    /**
     * 获取
     * @param params title 关键字
     * @returns {Promise<*>}
     */
    static async list(params) {
        let ret = null;
        let {page = 1, limit = 10, title} = params;
        if (title) {
            ret = await Brand.findAndCountAll({
                limit: parseInt(limit),
                offset: (page - 1) * limit,
                where: {
                    title:{
                        [Op.like]:'%' + title + '%'
                    }
                }
            });

        }else{
            ret = await Brand.findAndCountAll({
                'limit': parseInt(limit),
                'offset': (page - 1) * limit,
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
     * @param data 更新
     */
    static async update(data, id) {
        return await Brand.update(data, {
            where: {
                id
            }
        });
    }

    /**
     * 获取
     * @returns {Promise<Model>}
     */
    static async detail(id) {
        let ret = null;
        ret =  await Brand.findOne({
                    where: {
                        id
                    }
                }).then(function(tagData){
                    return tagData.toJSON();
            })
        
        return ret
    }


    /**
     * 删除
     * @param id listID
     * @returns {Promise.<boolean>}
     */
    static async delete(id) {
        await Brand.destroy({
            where: {
                id
            }
        })
        await Gallery.destroy({
            where: {
                brandid:id
            }
        })
        await Serise.destroy({
            where: {
                brandid:id
            }
        })
        return true
    }


}

module.exports = BrandModel
