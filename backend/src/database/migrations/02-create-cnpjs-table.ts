import { type Model, type QueryInterface } from 'sequelize'
import { DataType } from 'sequelize-typescript'
import { type ICnpj } from 'src/interfaces/cnpjs/ICnpj'

export default {
  async up (queryInterface: QueryInterface) {
    await queryInterface.createTable<Model<ICnpj>>('cnpjs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataType.INTEGER('11')
      },
      cnpj: {
        allowNull: false,
        type: DataType.STRING
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
