const moment = require('moment');

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('product', {
        // 车辆ID
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: true,
            autoIncrement: true,
        },
        // 产品名
        proname: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'proname',
        },
        // en产品名
        enproname: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'enproname',
        },
        // 产品描述
        procontent: {
            type: DataTypes.TEXT('long'),
            allowNull: true,
            field: 'procontent',
        },
        // en产品描述
        enprocontent: {
            type: DataTypes.TEXT('long'),
            allowNull: true,
            field: 'enprocontent',
        },
         // 产品简介
         prointro: {
            type: DataTypes.TEXT('long'),
            allowNull: true,
            field: 'prointro',
        },
        // en产品简介
        enprointro: {
            type: DataTypes.TEXT('long'),
            allowNull: true,
            field: 'enprointro',
        },
        // 系列id
        seriseid: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'seriseid',
        },
        // 系列名
        serisename: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'serisename',
        },
         // 封面图
         pastcover: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'pastcover',
        },
        // 产品图
        coverurl: {
            type: DataTypes.TEXT('long'),
            allowNull: true,
            field: 'coverurl',
        },
        // 状态
        status: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'status',
            defaultValue: 1
        },
        // 是否首页图
        frontpro: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'frontpro',
            defaultValue: 0
        },
        // 首页大图
        bigfront: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'bigfront',
            defaultValue: 0
        },
        // 首页产品位置
        frontwz: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'frontwz',
            defaultValue: 0
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
                return moment(this.getDataValue('updatedAt')).format('YYYY-MM-DD HH:mm:ss');
            }
        }
    }, {
        // 如果为 true 则表的名称和 model 相同，即 user
        // 为 false MySQL创建的表名称会是复数 users
        // 如果指定的表名称本就是复数形式则不变
        freezeTableName: true
    })

}
