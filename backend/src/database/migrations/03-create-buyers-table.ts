import { type QueryInterface } from 'sequelize'
import { DataType, type Model } from 'sequelize-typescript'
import { type IBuyer } from 'src/interfaces/buyers/IBuyer'

export default {
  async up (queryInterface: QueryInterface) {
    await queryInterface.createTable<Model<IBuyer>>('buyers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataType.INTEGER({ length: 11 })
      },
      name: {
        allowNull: false,
        type: DataType.STRING
      },
      tradingName: {
        defaultValue: null,
        type: DataType.STRING
      },
      cashforceTax: {
        defaultValue: null,
        type: DataType.STRING
      },
      responsibleName: {
        defaultValue: null,
        type: DataType.STRING
      },
      responsibleEmail: {
        defaultValue: null,
        type: DataType.STRING
      },
      responsiblePosition: {
        defaultValue: null,
        type: DataType.STRING
      },
      responsiblePhone: {
        defaultValue: null,
        type: DataType.STRING
      },
      responsibleMobile: {
        type: DataType.STRING,
        defaultValue: null
      },
      website: {
        defaultValue: null,
        type: DataType.STRING
      },
      postalCode: {
        defaultValue: null,
        type: DataType.STRING
      },
      address: {
        defaultValue: null,
        type: DataType.STRING
      },
      number: {
        defaultValue: null,
        type: DataType.STRING
      },
      complement: {
        defaultValue: null,
        type: DataType.STRING
      },
      neighborhood: {
        defaultValue: null,
        type: DataType.STRING
      },
      city: {
        defaultValue: null,
        type: DataType.STRING
      },
      state: {
        defaultValue: null,
        type: DataType.STRING
      },
      phoneNumber: {
        defaultValue: null,
        type: DataType.STRING
      },
      situation: {
        defaultValue: null,
        type: DataType.STRING
      },
      situationDate: {
        defaultValue: null,
        type: DataType.STRING
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
          model: {
            tableName: 'cnpjs'
          },
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      confirm: {
        type: DataType.TINYINT({ length: 1 }),
        defaultValue: 1
      },
      email: {
        type: DataType.STRING,
        defaultValue: null
      }
    })
  },
  async down (queryInterface: QueryInterface) {
    await queryInterface.dropTable('buyers')
  }
}
