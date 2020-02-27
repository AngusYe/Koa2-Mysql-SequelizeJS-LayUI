const db = require('../config/db');
const Sequelize = db.sequelize;
const Op = db.Sequelize.Op
const Product = Sequelize.import('../schema/product');
const fs = require('fs')
const config = require('../config')
const filePath = config.upload_url;
Product.sync({force: false});

class ProductModel {
    /**
     * 创建
     * @param data
     * @returns {Promise<*>}
     */
    static async createProduct(data) {
        return await Product.create(data)
    }

    /**
     * 查询
     * @param id  
     * @returns {Promise<Model>}
     */
    static async detail(id) {

        return await Product.findOne({
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
        if(typeof id == "object" && id.length >= 1){
            for(let i = 0;i<id.length;i++){
                const data = await Product.findOne({where: {id:id[i]}});
                const coverUrl = JSON.parse(data.coverurl);
                await Product.destroy({
                    where: {
                        id:id[i]
                    }
                })
                if(coverUrl.length>0){
                    for(let i = 0;i<coverUrl.length;i++){
                        fs.unlinkSync(filePath+coverUrl[i], function(err){
                            if(err){
                                throw new Error(err);
                            }
                        })
                    }
                }
            }
            return true
        }else{
            const data = await Product.findOne({where: {id}});
            const coverUrl = JSON.parse(data.coverurl);
            await Product.destroy({
                where: {
                    id,
                }
            })
            if(coverUrl.length>0){
                for(let i = 0;i<coverUrl.length;i++){
                    fs.unlinkSync(filePath+coverUrl[i], function(err){
                        if(err){
                            throw new Error(err);
                        }
                    })
                }
            }
            return true
        }
    }

    /**
     * 获取
     * @param params title 
     * @returns {Promise<*>}
     */
    static async list(params) {
        let ret = null;
        const condition = {}
        let {page = 1, limit = 10 , proname ,seriseid,frontpro,bigfront,startTime , endTime} = params;
        if(proname){
            condition.proname = {
                [Op.like]:'%' + proname + '%'
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
        if(seriseid){
            condition.seriseid = seriseid
        }
        if(frontpro){
            condition.frontpro = frontpro
        }
        if(bigfront){
            condition.bigfront = bigfront
        }
        
        ret = await Product.findAndCountAll({
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
     * 获取front
     * @param params title 
     * @returns {Promise<*>}
     */
    static async front(params) {
        let ret = null;
        const condition = {}
        let {page = 1, limit = 10 ,frontpro = 1} = params;
        if(frontpro){
            condition.frontpro = frontpro
        }
        
        ret = await Product.findAndCountAll({
            limit: parseInt(limit),
            offset: (page - 1) * limit,
            where: condition
        });
        
        return {
            code: 0,
            msg:'success',
            data: ret.rows.reverse(),
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
        return await Product.update(data, {
            where: {
                id
            }
        });
    }

    /**
     * 更新arr
     * @param id 
     * @param data 
     */
    static async updatepro(data) {
        const inproarr = JSON.parse(data.inproarr)
        const oldunproarr = JSON.parse(data.oldunproarr)
        if(oldunproarr.length>0){
            for(let k = 0;k<oldunproarr.length;k++){
                if(k == 0){
                    await Product.update({frontpro:0,bigfront:0,frontwz:0}, {
                        where: {
                            id:oldunproarr[k].proid
                        }
                    });
                }else{
                    await Product.update({frontpro:0,frontwz:0}, {
                        where: {
                            id:oldunproarr[k].proid
                        }
                    });
                }
    
            }
        }
        for(let i = 0;i<inproarr.length;i++){
            if(i == 0){
                await Product.update({frontpro:1,bigfront:1,frontwz:inproarr[i].wz}, {
                    where: {
                        id:inproarr[i].proid
                    }
                });
            }else{
                await Product.update({frontpro:1,frontwz:inproarr[i].wz}, {
                    where: {
                        id:inproarr[i].proid
                    }
                });
            }

        }
       
        return true
        
    }


    
}

module.exports = ProductModel
