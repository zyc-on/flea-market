const Sequelize = require('sequelize')

class VerificationCode extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        email: {
          type: Sequelize.STRING,
          primaryKey: true,
        },
        code: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        expire: {
          type: Sequelize.STRING,
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: 'verificationCode',
        paranoid: false,
        timestamps: false,
      }
    )
  }
}
module.exports = VerificationCode
