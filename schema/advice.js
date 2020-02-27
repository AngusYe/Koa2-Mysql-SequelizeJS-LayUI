const moment = require('moment');
module.exports = function (sequelize, DataTypes) {
    //在线留言
    return sequelize.define('advice', {
        // ID
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: true,
            autoIncrement: true,
        },
        // 姓名
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'name',
        },
        // 邮件
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'email'
        },
         // 电话
         phone: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'phone'
        },
        // 问题
        content: {
            type: DataTypes.TEXT('long'),
            allowNull: false,
            field: 'content',
        },
        // 状态
        status: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'status',
            defaultValue: 0
        },// 标题
        title: {
            type: DataTypes.TEXT('long'),
            allowNull: false,
            field: 'title'
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
