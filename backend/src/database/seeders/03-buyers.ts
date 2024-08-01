import { type QueryInterface } from 'sequelize'

export default {
  async up (queryInterface: QueryInterface) {
    await queryInterface.bulkInsert(
      'buyers',
      [
        {
          name: 'SACADO 001',
          tradingName: 'SACADO 001 LTDA',
          cashforceTax: '0',
          responsibleName: null,
          responsibleEmail: null,
          responsiblePosition: null,
          responsiblePhone: null,
          responsibleMobile: null,
          website: null,
          postalCode: null,
          address: null,
          number: null,
          complement: null,
          neighborhood: null,
          city: null,
          state: null,
          phoneNumber: null,
          situation: null,
          situationDate: null,
          createdAt: '2020-10-29 21:20:33',
          updatedAt: '2020-10-29 21:20:34',
          cnpjId: 437,
          confirm: 1,
          email: null
        }
      ]
    )
  },
  async down (queryInterface: QueryInterface) {
    await queryInterface.bulkDelete('buyers', {})
  }
}
