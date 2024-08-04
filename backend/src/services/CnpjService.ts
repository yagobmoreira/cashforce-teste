import { type NewEntity } from 'src/interfaces'
import { type ServiceMessage, type ServiceResponse } from 'src/interfaces/ServiceResponse'
import { ICnpj } from 'src/interfaces/cnpjs/ICnpj'
import { ICnpjModel } from 'src/interfaces/cnpjs/ICnpjModel'
import CnpjModel from 'src/models/CnpjModel'

export default class CnpjService {
  constructor (
    private readonly cnpjModel: ICnpjModel = new CnpjModel()
  ) {}

  public async getAllCnpjs (): Promise<ServiceResponse<ICnpj[]>> {
    const allCnpjs = await this.cnpjModel.findAll()
    return { status: 'SUCCESSFUL', data: allCnpjs }
  }

  public async getCnpjById (id: number): Promise<ServiceResponse<ICnpj>> {
    const foundCnpj = await this.cnpjModel.findById(id)

    if (foundCnpj == null) return { status: 'NOT_FOUND', data: { message: `Cnpj ${id} not found` } }

    return { status: 'SUCCESSFUL', data: foundCnpj }
  }

  public async createCnpj (cnpj: NewEntity<ICnpj>): Promise<ServiceResponse<ICnpj>> {
    const createdCnpj = await this.cnpjModel.create(cnpj)

    return { status: 'SUCCESSFUL', data: createdCnpj }
  }

  public async updateCnpj (id: number, cnpj: NewEntity<ICnpj>): Promise<ServiceResponse<ServiceMessage>> {
    const foundCnpj = await this.cnpjModel.findById(id)

    if (foundCnpj == null) return { status: 'NOT_FOUND', data: { message: `Cnpj ${id} not found` } }

    await this.cnpjModel.update(id, cnpj)

    return { status: 'SUCCESSFUL', data: { message: 'Cnpj updated' } }
  }
}
