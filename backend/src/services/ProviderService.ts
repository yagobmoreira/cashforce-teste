import { type NewEntity } from 'src/interfaces'
import { type ServiceMessage, type ServiceResponse } from 'src/interfaces/ServiceResponse'
import ProviderModel from 'src/models/ProviderModel'
import { IProviderModel } from 'src/interfaces/providers/IProviderModel'
import { IProvider } from 'src/interfaces/providers/IProvider'

export default class ProviderService {
  constructor (
    private readonly providerModel: IProviderModel = new ProviderModel()
  ) {}

  public async getAllProviders (): Promise<ServiceResponse<IProvider[]>> {
    const allProviders = await this.providerModel.findAll()
    return { status: 'SUCCESSFUL', data: allProviders }
  }

  public async getProviderById (id: number): Promise<ServiceResponse<IProvider>> {
    const foundProvider = await this.providerModel.findById(id)

    if (foundProvider == null) return { status: 'NOT_FOUND', data: { message: `Provider ${id} not found` } }

    return { status: 'SUCCESSFUL', data: foundProvider }
  }

  public async createProvider (Provider: NewEntity<IProvider>): Promise<ServiceResponse<IProvider>> {
    const createdProvider = await this.providerModel.create(Provider)

    return { status: 'SUCCESSFUL', data: createdProvider }
  }

  public async updateProvider (id: number, Provider: NewEntity<IProvider>): Promise<ServiceResponse<ServiceMessage>> {
    const foundProvider = await this.providerModel.findById(id)

    if (foundProvider == null) return { status: 'NOT_FOUND', data: { message: `Provider ${id} not found` } }

    await this.providerModel.update(id, Provider)

    return { status: 'SUCCESSFUL', data: { message: 'Provider updated' } }
  }
}
