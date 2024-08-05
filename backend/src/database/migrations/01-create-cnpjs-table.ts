import { ICnpj } from 'interfaces/cnpjs/ICnpj'
import { type Model, type QueryInterface } from 'sequelize'
import { DataType } from 'sequelize-typescript'

export default {
  async up (queryInterface: QueryInterface) {
    await queryInterface.createTable<Model<ICnpj>>('cnpjs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataType.INTEGER({ length: 11 })
      },
      cnpj: {
        allowNull: false,
        type: DataType.STRING,
        unique: true
      },
      companyType: {
        allowNull: false,
        type: DataType.STRING
      },
      createdAt: {
        type: DataType.DATE,
        allowNull: false
      },
      updatedAt: {
        type: DataType.DATE,
        allowNull: false
      }
    })
  },
  async down (queryInterface: QueryInterface) {
    await queryInterface.dropTable('cnpjs')
  }
}
