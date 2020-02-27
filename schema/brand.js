const moment = require('moment');

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('brand', {
        // ID
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: true,
            autoIncrement: true,
        },
        // 品牌
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'title',
        },
        fulltitle: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'fulltitle',
        },
        simplytitle: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'simplytitle',
        },
        // logo
        logo: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'logo'
        },
        // status
        status: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'status',
            defaultValue: 1
        },
        // status
        hotcar: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'hotcar',
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
