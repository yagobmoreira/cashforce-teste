import { IUser } from 'interfaces/users/IUser'
import { type QueryInterface } from 'sequelize'
import { DataType, type Model } from 'sequelize-typescript'

export default {
  async up (queryInterface: QueryInterface) {
    await queryInterface.createTable<Model<IUser>>('users', {
      id: {
        type: DataType.INTEGER({ length: 11 }),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataType.STRING,
        allowNull: false
      },
      email: {
        type: DataType.STRING,
        allowNull: false,
        unique: true
      },
      phoneNumber: {
        type: DataType.STRING,
        defaultValue: null
      },
      mobile: {
        type: DataType.STRING,
        defaultValue: null
      },
      departament: {
        type: DataType.STRING,
        defaultValue: null
      },
      verificationCode: {
        type: DataType.STRING,
        defaultValue: null
      },
      emailChecked: {
        type: DataType.TINYINT({ length: 1 }),
        defaultValue: 0
      },
      createdAt: {
        type: DataType.DATE,
        allowNull: false
      },
      updatedAt: {
        type: DataType.DATE,
        allowNull: false
      },
      cashforceAdm: {
        type: DataType.TINYINT({ length: 1 }),
        defaultValue: 0
      }
    })
  },
  async down (queryInterface: QueryInterface) {
    await queryInterface.dropTable('users')
  }
}
