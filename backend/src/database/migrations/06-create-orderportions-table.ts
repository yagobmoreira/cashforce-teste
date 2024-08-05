import { type QueryInterface } from 'sequelize'
import { DataType, type Model } from 'sequelize-typescript'
import { type IOrderPortion } from 'src/interfaces/orderportions/IOrderPortion'

export default {
  async up (queryInterface: QueryInterface) {
    await queryInterface.createTable<Model<IOrderPortion>>('orderportions', {
      id: {
        type: DataType.INTEGER({ length: 11 }),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      nDup: {
        type: DataType.STRING,
        allowNull: false
      },
      dVenc: {
        type: DataType.STRING,
        allowNull: false
      },
      vDup: {
        type: DataType.STRING,
        allowNull: false
      },
      availableToMarket: {
        type: DataType.TINYINT({ length: 1 }),
        defaultValue: 1
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
      }
    })
  },
  async down (queryInterface: QueryInterface) {
    await queryInterface.dropTable('orderportions')
  }
}
