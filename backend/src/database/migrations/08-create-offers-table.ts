import { type QueryInterface } from 'sequelize'
import { DataType, type Model } from 'sequelize-typescript'
import { type IOffer } from 'src/interfaces/offers/IOffer'

export default {
  async up (queryInterface: QueryInterface) {
    await queryInterface.createTable<Model<IOffer>>('offers', {
      id: {
        type: DataType.INTEGER({ length: 11 }),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
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
        type: DataType.TINYINT({ length: 1 }),
        defaultValue: 0
      },
      paymentStatusProvider: {
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
      orderId: {
        type: DataType.INTEGER({ length: 11 }),
        defaultValue: null,
        references: {
          model: { tableName: 'orders' },
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      sponsorId: {
        type: DataType.INTEGER({ length: 11 }),
        defaultValue: null,
        references: {
          model: { tableName: 'sponsors' },
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      }
    })
  },
  async down (queryInterface: QueryInterface) {
    await queryInterface.dropTable('offers')
  }
}
