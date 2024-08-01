import { type QueryInterface } from 'sequelize'

export default {
  async up (queryInterface: QueryInterface) {
    await queryInterface.bulkInsert(
      'orders',
      [
        {
          orderNfId: '1605181324132',
          orderNumber: '18153',
          emissionDate: '2020-10-30T11:00:00-03:00',
          emitedTo: '22843980000127',
          nNf: '18153',
          value: '198450',
          createdAt: '2020-10-30 17:54:18',
          updatedAt: '2020-10-30 17:54:18',
          cnpjId: 437,
          userId: 122,
          buyerId: 152,
          providerId: 235,
          orderStatusBuyer: '0',
          orderStatusProvider: '0'
        },
        {
          orderNfId: '160518132413',
          orderNumber: '18157',
          emissionDate: '2020-11-04T15:32:35-02:00',
          emitedTo: '35705180000272',
          nNf: '18157',
          value: '168850',
          createdAt: '2020-11-10 18:33:46',
          updatedAt: '2020-11-10 18:33:46',
          cnpjId: 437,
          userId: 122,
          buyerId: 152,
          providerId: 235,
          orderStatusBuyer: '0',
          orderStatusProvider: '0'
        },
        {
          orderNfId: '1605181324130',
          orderNumber: '18184',
          emissionDate: '2020-11-10',
          emitedTo: '00418477002640',
          nNf: '18184',
          value: '222795',
          createdAt: '2020-11-12 11:42:06',
          updatedAt: '2020-11-18 12:22:14',
          cnpjId: 437,
          userId: 122,
          buyerId: 152,
          providerId: 235,
          orderStatusBuyer: '7',
          orderStatusProvider: '3'
        }
      ]
    )
  },
  async down (queryInterface: QueryInterface) {
    await queryInterface.bulkDelete('orders', {})
  }
}
