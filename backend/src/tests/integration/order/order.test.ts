import sinon from 'sinon'
import chaiModule, { expect } from 'chai'
import chaiHttp from 'chai-http'

import { app } from '../../../App'
import OrderModel from 'src/models/OrderModel'
import Order from 'src/database/models/Order'
import orderMock from 'src/tests/mocks/order.mock'
import { afterEach } from 'mocha'

const chai = chaiModule.use(chaiHttp)

describe('Orders testes', function () {
  beforeEach(function () { sinon.restore() })
  afterEach(function () { sinon.restore() })

  it('Deve retornar todas as orders com requisição GET para /orders', async function () {
    sinon.stub(Order, 'findAll').resolves(orderMock.validOrders as any)

    const {status, body} = await chai.request(app).get('/orders')

    expect(status).to.be.equal(200)
    expect(body).to.be.deep.equal(orderMock.validOrders)
  })

  it('Deve retornar a order com requisição GET com id existente com requisição /orders/:id', async function () {
    const mockGetReturn = Order.build(orderMock.validOrder as any);
    
    sinon.stub(Order, 'findByPk').resolves(mockGetReturn)

    const {status, body} = await chai.request(app).get('/orders/1')

    expect(status).to.be.equal(200)
    expect(body).to.be.deep.equal(orderMock.validOrder)
  })

  it('Deve retornar erro ao buscar order inexistente', async function () {
    sinon.stub(Order, 'findByPk').resolves(null)

    const {status, body} = await chai.request(app).get('/orders/99999')

    expect(status).to.be.equal(404)
    expect(body.message).to.be.deep.equal("Order 99999 not found")
  })
})