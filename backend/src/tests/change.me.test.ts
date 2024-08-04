/* eslint-disable @typescript-eslint/no-unused-expressions */
import sinon from 'sinon'
import chaiModule from 'chai'
import chaiHttp from 'chai-http'

import { app } from 'src/App'

const chai = chaiModule.use(chaiHttp)

describe('POST /login', function () {
  beforeEach(function () { sinon.restore() })

  it('Teste #1', async function () {
    const httpResponse = await chai.request(app).get('/orders')
    console.log(httpResponse.status)
  })
})
