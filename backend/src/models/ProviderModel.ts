import Provider from '../database/models/Provider'
import { NewEntity, type ID } from '../interfaces'
import { type IProvider } from '../interfaces/providers/IProvider'
import { type IProviderModel } from '../interfaces/providers/IProviderModel'

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

  async update (id: number, data: Partial<IProvider>): Promise<IProvider | null> {
    const [affectedRows] = await this.model.update(data, { where: { id } })

    if (affectedRows === 0) return null

    return await this.findById(id)
  }

  async create (data: NewEntity<IProvider>): Promise<IProvider> {
    const dbData = await this.model.create(data)
    return dbData
  }

  async destroy(id: number): Promise<number> {
    return this.model.destroy({ where: { id } })
  }
}
