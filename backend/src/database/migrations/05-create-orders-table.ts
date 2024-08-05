import { IOrder } from 'interfaces/orders/IOrder'
import { type QueryInterface } from 'sequelize'
import { DataType, type Model } from 'sequelize-typescript'

export default {
  async up (queryInterface: QueryInterface) {
    await queryInterface.createTable<Model<IOrder>>('orders', {
      id: {
        type: DataType.INTEGER({ length: 11 }),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      orderNfId: {
        type: DataType.STRING,
        allowNull: false,
        unique: true
      },
      orderNumber: {
        type: DataType.STRING,
        allowNull: false
      },
      orderPath: {
        type: DataType.STRING,
        defaultValue: null,
        unique: true
      },
      orderFileName: {
        type: DataType.STRING,
        defaultValue: null,
        unique: true
      },
      orderOriginalName: {
        type: DataType.STRING,
        defaultValue: null,
        unique: true
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
        type: DataType.INTEGER({ length: 11 }),
        defaultValue: null,
        references: {
          model: { tableName: 'cnpjs' },
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      userId: {
        type: DataType.INTEGER({ length: 11 }),
        defaultValue: null,
        references: {
          model: { tableName: 'users' },
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      buyerId: {
        type: DataType.INTEGER({ length: 11 }),
        defaultValue: null,
        references: {
          model: { tableName: 'buyers' },
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      providerId: {
        type: DataType.INTEGER({ length: 11 }),
        defaultValue: null,
        references: {
          model: { tableName: 'providers' },
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
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
