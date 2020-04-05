const Sequelize = require('sequelize')
const bcrypt = require('bcryptjs')
const {
  AuthFailException,
  UserAlreadyExistException,
} = require('../../lib/http-exception')

class User extends Sequelize.Model {
  static async login({ account, password }) {
    const user = await User.findOne({
      where: {
        account,
      },
    })

    if (!user) throw new AuthFailException('用户名或密码错误，请重新输入')

    const correct = bcrypt.compareSync(password, user.password)

    if (!correct) throw new AuthFailException('用户名或密码错误，请重新输入')

    return user
  }

  static async register({ account, password }) {
    const user = await User.findOne({
      where: {
        account,
      },
    })
    if (user) throw new UserAlreadyExistException()

    return User.create({ account, password })
  }

  static updateProfile(id, profile) {
    // let user = await User.findByPk(id)
    // user.username = profile.username
    // user.sex = profile.sex
    // user.avatar = profile.avatar
    // user.school = profile.school
    // user.motto = profile.motto
    // user = await user.save()
    // User.update()
    return User.update(profile, { where: { id } })
  }

  static init(sequelize) {
    return super.init(
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        account: {
          type: Sequelize.STRING,
          unique: true,
        },
        password: {
          type: Sequelize.STRING,
          set(val) {
            const salt = bcrypt.genSaltSync(10)
            const pwd = bcrypt.hashSync(val, salt)
            this.setDataValue('password', pwd)
          },
        },
        username: {
          type: Sequelize.STRING,
          defaultValue: '大坏蛋阿三',
        },
        sex: Sequelize.BOOLEAN,
        avatar: {
          type: Sequelize.STRING,
          defaultValue: '/avatar/112.jpg',
        },
        school: Sequelize.STRING,
        location: Sequelize.STRING,
        motto: {
          type: Sequelize.STRING,
          allowNull: true,
        },
      },
      {
        sequelize,
        modelName: 'user',
      }
    )
  }

  static associate(models) {
    this.hasMany(models.Goods)
  }
}

module.exports = User
