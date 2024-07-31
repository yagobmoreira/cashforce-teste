import { type QueryInterface } from 'sequelize'

export default {
  async up (queryInterface: QueryInterface) {
    await queryInterface.bulkInsert(
      'buyers',
      [
        {
          name: 'SACADO 001',
          tradingName: 'SACADO 001 LTDA',
          cashForceTax: '0',
          createdAt: '2020-10-29 21:20:33',
          updatedAt: '2020-10-29 21:20:34',
          cnpjId: 1,
          confirm: 1
        }
      ]
    )
  }
}
