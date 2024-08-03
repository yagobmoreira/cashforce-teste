import Provider from 'src/database/models/Provider'
import { type ID } from 'src/interfaces'
import { type IProvider } from 'src/interfaces/providers/IProvider'
import { type IProviderModel } from 'src/interfaces/providers/IProviderModel'

export default class ProviderModel implements IProviderModel {
  private readonly model = Provider

  async findById (id: ID): Promise<IProvider | null> {
    const dbData = await this.model.findByPk(id)

    if (dbData === null) return null

    return dbData.dataValues
  }

  async findAll (): Promise<IProvider[]> {
    const dbData = await this.model.findAll()

    return dbData
  }
}
