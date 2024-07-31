import { type QueryInterface } from 'sequelize'

export default {
  async up (queryInterface: QueryInterface) {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          name: 'ALLAN SOUZA',
          email: 'allan@cashforce.com.br',
          emailChecked: 1,
          createdAt: '2020-10-01 21:31:37',
          updatedAt: '2020-10-01 22:41:23',
          cashforceAdm: 1
        }
      ]
    )
  },
  async down (queryInterface: QueryInterface) {
    await queryInterface.bulkDelete('users', {})
  }
}
