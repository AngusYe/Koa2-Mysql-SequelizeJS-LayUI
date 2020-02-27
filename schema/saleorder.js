const moment = require('moment');
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('sale', {
        // ID
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: true,
            autoIncrement: true,
        },
        // 电话
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'phone',
        },
        // 状态
        status: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'status',
            defaultValue: 0
        },
        // 区域
        city: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'city'
        },
        // 区域
        cityname: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'cityname'
        },
        createdAt: {
            type: DataTypes.DATE,
            field: 'created_at',
            get() {
                return moment(this.getDataValue('createdAt')).format('YYYY-MM-DD HH:mm:ss');
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
