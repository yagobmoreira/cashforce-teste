import { type NewEntity } from '../interfaces'
import { type ServiceMessage, type ServiceResponse } from '../interfaces/ServiceResponse'
import ProviderModel from '../models/ProviderModel'
import { IProviderModel } from '../interfaces/providers/IProviderModel'
import { IProvider } from '../interfaces/providers/IProvider'

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

  public async deleteProvider(id: number): Promise<ServiceResponse<ServiceMessage>> {
    const foundProvider = await this.providerModel.findById(id);

    if (foundProvider == null) return { status: 'NOT_FOUND', data: { message: `Provider ${id} not found` } }

    await this.providerModel.destroy(id)
    
    return { status: 'SUCCESSFUL', data: { message: 'Provider deleted' } };
  }
}
