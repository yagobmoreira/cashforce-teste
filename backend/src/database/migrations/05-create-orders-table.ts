import { type QueryInterface } from 'sequelize'
import { DataType, type Model } from 'sequelize-typescript'
import { type IOrder } from 'src/interfaces/orders/IOrder'

export default {
  async up (queryInterface: QueryInterface) {
    await queryInterface.createTable<Model<IOrder>>('orders', {
      id: {
        type: DataType.INTEGER('11'),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      orderNfId: {
        type: DataType.STRING,
        allowNull: false
      },
      orderNumber: {
        type: DataType.STRING,
        allowNull: false
      },
      orderPath: {
        type: DataType.STRING,
        defaultValue: null
      },
      orderFileName: {
        type: DataType.STRING,
        defaultValue: null
      },
      orderOriginalName: {
        type: DataType.STRING,
        defaultValue: null
      },
      emissionDate: {
        type: DataType.STRING,
        defaultValue: null
      },
      pdfFile: {
        type: DataType.STRING,
        defaultValue: null
      },
      emitedTo: {
        type: DataType.STRING,
        allowNull: false
      },
      nNf: {
        type: DataType.STRING,
        defaultValue: null
      },
      CTE: {
        type: DataType.STRING,
        defaultValue: null
      },
      value: {
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
        type: DataType.INTEGER('11'),
        defaultValue: null
      },
      userId: {
        type: DataType.INTEGER('11'),
        defaultValue: null
      },
      buyerId: {
        type: DataType.INTEGER('11'),
        defaultValue: null
      },
      providerId: {
        type: DataType.INTEGER('11'),
        defaultValue: null
      },
      orderStatusBuyer: {
        type: DataType.STRING,
        defaultValue: '0'
      },
      orderStatusProvider: {
        type: DataType.STRING,
        defaultValue: '0'
      },
      deliveryReceipt: {
        type: DataType.STRING,
        defaultValue: null
      },
      cargoPackingList: {
        type: DataType.STRING,
        defaultValue: null
      },
      deliveryCtrc: {
        type: DataType.STRING,
        defaultValue: null
      }
    })
  },
  async down (queryInterface: QueryInterface) {
    await queryInterface.dropTable('orders')
  }
}
