import { type QueryInterface } from 'sequelize'
import { DataType, type Model } from 'sequelize-typescript'
import { type IOffer } from 'src/interfaces/offers/IOffer'

export default {
  async up (queryInterface: QueryInterface) {
    await queryInterface.createTable<Model<IOffer>>('offers', {
      id: {
        type: DataType.INTEGER('11'),
        allowNull: false
      },
      tax: {
        type: DataType.STRING,
        allowNull: false
      },
      tariff: {
        type: DataType.STRING,
        allowNull: false
      },
      adValorem: {
        type: DataType.STRING,
        allowNull: false
      },
      float: {
        type: DataType.STRING,
        allowNull: false
      },
      iof: {
        type: DataType.STRING,
        allowNull: false
      },
      expiresIn: {
        type: DataType.DATE,
        allowNull: false
      },
      paymentStatusSponsor: {
        type: DataType.TINYINT('1'),
        defaultValue: 0
      },
      paymentStatusProvider: {
        type: DataType.TINYINT('1'),
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
      orderId: {
        type: DataType.INTEGER('11'),
        defaultValue: null
      },
      sponsorId: {
        type: DataType.INTEGER('11'),
        defaultValue: null
      }
    })
  },
  async down (queryInterface: QueryInterface) {
    await queryInterface.dropTable('offers')
  }
}
