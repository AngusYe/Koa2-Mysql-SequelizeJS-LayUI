const moment = require('moment');
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('article', {
        // ID
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: true,
            autoIncrement: true,
        },
        // type
        type: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'type',
        },
        // 标题
        title: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'title',
        },
        // 内容
        content: {
            type: DataTypes.TEXT('long'),
            allowNull: false,
            field: 'content',
        },
        // 英文标题
        entitle: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'entitle',
        },
        // 英文内容
        encontent: {
            type: DataTypes.TEXT('long'),
            allowNull: false,
            field: 'encontent',
        },
        // 状态
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
