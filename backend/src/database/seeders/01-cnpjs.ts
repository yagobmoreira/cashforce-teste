import { type QueryInterface } from 'sequelize'

export default {
  async up (queryInterface: QueryInterface) {
    await queryInterface.bulkInsert(
      'cnpjs',
      [
        {
          cnpj: '00000000000001',
          companyType: '2',
          createdAt: '2020-10-29 21:20:33',
          updatedAt: '2020-10-29 21:20:33'
        },
        {
          cnpj: '00000000000002',
          companyType: '1',
          createdAt: '2020-10-29 21:20:33',
          updatedAt: '2020-10-29 21:20:33'
        }
      ]
    )
  },
  async down (queryInterface: QueryInterface) {
    await queryInterface.bulkDelete('cnpjs', {})
  }
}
