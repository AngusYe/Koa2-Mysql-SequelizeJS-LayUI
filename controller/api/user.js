const UserModel = require('../../modules/user')
const bcrypt = require('bcryptjs')
const createToken = require('../../token/createToken')
const checkToken = require('../../token/checkToken')
class UserController {
    /**
   * 创建用户
   * @param ctx
   * @returns {Promise.<void>}
   */
  static async create (ctx) {
    const user = ctx.request.body
    if (user.pwd && user.username) {
      const existUser = await UserModel.findUserByName(user.username)
      if (existUser) {
        ctx.response.status = 200;
        ctx.body = {
          code: -1,
          msg: '用户名已经存在'
        }
      } else {
        // 密码加密
        const salt = bcrypt.genSaltSync()
        const hash = bcrypt.hashSync(user.pwd, salt)
        user.pwd = hash
        await UserModel.createUser(user)
        const newUser = await UserModel.findUserByName(user.username)
        // 签发token
        const userToken = {
            username: newUser.username,
            id: newUser.id
        }
        const token =  createToken(userToken)
        ctx.response.status = 200;
        ctx.body = {
          code: 200,
          msg: 'success',
          bean: {
            token
          }
        }
      }
    } else {
        ctx.response.status = 200;
        if(!user.pwd){
            ctx.body = {
                code: -1,
                msg: '请输入密码'
            }
        }else if(!user.username){
            ctx.body = {
                code: -1,
                msg: '请输入用户名'
            }
        }else if(!user.city){
            ctx.body = {
                code: -1,
                msg: '请选择用户区域'
            }
        }
        
    }
  }

    /**
   * 登录
   * @param ctx
   * @returns {Promise.<void>}
   */
  static async postLogin (ctx) {
    const data = ctx.request.body
    const user = await UserModel.findUserByName(data.username)  // 查询用户
    // 判断用户是否存在
    if (user) {
      if (bcrypt.compareSync(data.pwd, user.pwd)) {
        // 用户token
        const userToken = {
          name: user.username,
          nick: user.nickname
        }
        const token = createToken(userToken)  // 签发token
        ctx.session.username = user.username
        ctx.session.nickname = user.nickname
        ctx.cookies.set('nick',encodeURIComponent(encodeURIComponent(user.nickname)))
        ctx.response.status = 200;
        ctx.body = {
            msg: 'success',
            bean: {
                token
            },
            code: 200
        }
      } else {
        ctx.response.status = 200;
        ctx.body = {
          code: -1,
          msg: '用户名或密码错误'
        }
      }
    } else {
        ctx.response.status = 200;
        ctx.body = {
            code: -1,
            msg: '用户名不存在'
        }
    }
  }



    /**
     * 获取列表
     * @param ctx
     *
     * @returns 列表数据
     */
    static async list(ctx) {
        let params = ctx.request.body;
        try {
            const data = await UserModel.list(params);
            ctx.response.status = 200;
            ctx.body = data

        } catch (err) {
            ctx.response.status = 200;
            ctx.body = {
                code: 500,
                msg: `查询失败`,
                data: err
            }
        }
    }

    /**
     * 查询信息详情
     * @param ctx id  
     *
     * @returns 信息的详情
     */
    static async detail(ctx) {
        let params = ctx.request.body;
        let userid = params.userid;
        // 检测是否传入ID
        if (!userid) {
            ctx.response.status = 412;
            ctx.body = {
                code: 412,
                msg: `userid不能为空`
            }

            return false;
        }
        try {

            let data = await UserModel.detail(userid);
            ctx.response.status = 200;
            ctx.body = {
                code: 200,
                msg: `成功`,
                data
            }

        } catch (err) {
            ctx.response.status = 500;
            ctx.body = {
                code: 500,
                msg: `失败`,
                data: err
            }
        }

    }

    /**
     * 更新数据
     * @param ctx                 
     *
     * @returns 更新成功则返回更新后的数据，失败返回更新失败的原因
     */
    static async update(ctx) {
        // 接收参数
        let {nickname,pwd} = ctx.request.body;
        // 密码加密
        const salt = bcrypt.genSaltSync()
        const hash = bcrypt.hashSync(pwd, salt)
        pwd = hash
        let params = {
            username:ctx.session.username,
            nickname,
            pwd
        }

        try {
            await UserModel.update(params,params.username);

            ctx.response.status = 200;
            ctx.body = {
                code: 200,
                msg: `更新成功`,
            }

        } catch (err) {
            ctx.response.status = 500;
            ctx.body = {
                code: 500,
                msg: `更新失败`,
                data: err
            }
        }
    }


    /**
     * 删除用户
     * @param ctx id 用户ID
     * @returns  删除成功返回true，失败返回错误原因
     */
    static async delete(ctx) {
        let {userid} = ctx.request.body;

        // 检测是否传入ID
        if (!userid) {
            ctx.response.status = 412;
            ctx.body = {
                code: 412,
                msg: `userid不能为空`
            }

            return false;
        }

        if (isNaN(userid)) {
            ctx.response.status = 412;
            ctx.body = {
                code: 412,
                msg: `请传入正确的ID`
            }

            return false;
        }

        try {
            await UserModel.delete(userid);

            ctx.response.status = 200;
            ctx.body = {
                code: 200,
                msg: "删除成功"
            }

        } catch (err) {
            ctx.response.status = 200;
            ctx.body = {
                code: 500,
                msg: err
            }
        }
    }

   
}

module.exports = UserController
