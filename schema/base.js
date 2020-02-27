const moment = require('moment');
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('base', {
        // ID
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: true,
            autoIncrement: true,
        },
        // 网站名称
        sitename: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'sitename',
        },
        // 电话
        hotphone: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'hotphone',
        },
        // 关键词
        keywords: {
            type: DataTypes.TEXT('long'),
            allowNull: true,
            field: 'keywords',
        },
        // 关键词
        descript: {
            type: DataTypes.TEXT('long'),
            allowNull: true,
            field: 'descript',
        },
        // 版权备案信息
        copyright: {
            type: DataTypes.TEXT('long'),
            allowNull: true,
            field: 'copyright'
        },
        // 邮箱
        email: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'email'
        },
        // 二维码
        ewm: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'ewm'
        },
        // logo
        logo: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'logo'
        },
        // waplogo
        waplogo: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'waplogo'
        },
        // 总部地址
        address: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'address'
        },      
        // 英文总部地址
        enaddress: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'enaddress'
        }, 
        // banner
        banner: {
            type: DataTypes.STRING(255),
            allowNull: true,
            field: 'banner'
        },
        // banner
        wapbanner: {
            type: DataTypes.STRING(255),
            allowNull: true,
            field: 'wapbanner'
        },
        // status
        status: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'status',
            defaultValue: 1
        },
        createdAt: {
            type: DataTypes.DATE,
            field: 'created_at',
            get() {
                return moment(this.getDataValue('createdAt')).format('YYYY-MM-DD');
            }
        },
        updatedAt: {
            type: DataTypes.DATE,
            field: 'updated_at',
            get() {
                return moment(this.getDataValue('updatedAt')).format('YYYY-MM-DD');
            }
        }
        

    }, {
        // 如果为 true 则表的名称和 model 相同，即 user
        // 为 false MySQL创建的表名称会是复数 users
        // 如果指定的表名称本就是复数形式则不变
        freezeTableName: true
    })

}
