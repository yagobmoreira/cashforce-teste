import { type QueryInterface } from 'sequelize'
import { DataType, type Model } from 'sequelize-typescript'
import { type ISponsor } from 'src/interfaces/sponsors/ISponsor'

export default {
  async up (queryInterface: QueryInterface) {
    await queryInterface.createTable<Model<ISponsor>>('sponsors', {
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
      tradingName: {
        type: DataType.STRING,
        defaultValue: null
      },
      cashforceTax: {
        type: DataType.STRING,
        defaultValue: null
      },
      responsibleName: {
        type: DataType.STRING,
        defaultValue: null
      },
      responsibleEmail: {
        type: DataType.STRING,
        defaultValue: null
      },
      responsiblePosition: {
        type: DataType.STRING,
        defaultValue: null
      },
      responsiblePhone: {
        type: DataType.STRING,
        defaultValue: null
      },
      responsibleMobile: {
        type: DataType.STRING,
        defaultValue: null
      },
      website: {
        type: DataType.STRING,
        defaultValue: null
      },
      postalCode: {
        type: DataType.STRING,
        defaultValue: null
      },
      address: {
        type: DataType.STRING,
        defaultValue: null
      },
      number: {
        type: DataType.STRING,
        defaultValue: null
      },
      complement: {
        type: DataType.STRING,
        defaultValue: null
      },
      neighborhood: {
        type: DataType.STRING,
        defaultValue: null
      },
      city: {
        type: DataType.STRING,
        defaultValue: null
      },
      state: {
        type: DataType.STRING,
        defaultValue: null
      },
      bank: {
        type: DataType.STRING,
        defaultValue: null
      },
      bankAgency: {
        type: DataType.STRING,
        defaultValue: null
      },
      account: {
        type: DataType.STRING,
        defaultValue: null
      },
      phoneNumber: {
        type: DataType.STRING,
        defaultValue: null
      },
      situation: {
        type: DataType.STRING,
        defaultValue: null
      },
      situationDate: {
        type: DataType.STRING,
        defaultValue: null
      },
      createdAt: {
        type: DataType.DATE,
        allowNull: false
      },
      updatedAt: {
        type: DataType.DATE,
        allowNull: false
      },
      cnpjId: {
        type: DataType.INTEGER({ length: 11 }),
        defaultValue: null
      },
      email: {
        type: DataType.STRING,
        defaultValue: null
      }
    })
  },
  async down (queryInterface: QueryInterface) {
    await queryInterface.dropTable('sponsors')
  }
}
