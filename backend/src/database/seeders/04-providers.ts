import { type QueryInterface } from 'sequelize'

export default {
  async up (queryInterface: QueryInterface) {
    await queryInterface.bulkInsert(
      'providers',
      [
        {
          name: 'CEDENTE 002',
          tradingName: 'CEDENTE 002 LTDA',
          createdAt: '2020-10-29 21:22:21',
          updatedAt: '2020-10-29 21:22:22',
          cnpjId: 438
        }
      ]
    )
  },
  async down (queryInterface: QueryInterface) {
    await queryInterface.bulkDelete('providers', {})
  }
}
