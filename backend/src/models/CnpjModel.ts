import Cnpj from '../database/models/Cnpj'
import Provider from '../database/models/Provider'
import { NewEntity, type ID } from '../interfaces'
import { ICnpj } from '../interfaces/cnpjs/ICnpj'
import { ICnpjModel } from '../interfaces/cnpjs/ICnpjModel'
import { type IProvider } from '../interfaces/providers/IProvider'

export default class CnpjModel implements ICnpjModel {
  private readonly model = Cnpj

  async findById (id: ID): Promise<ICnpj | null> {
    const dbData = await this.model.findByPk(id)

    if (dbData === null) return null

    return dbData.dataValues
  }

  async findAll (): Promise<ICnpj[]> {
    const dbData = await this.model.findAll()

    return dbData
  }

  async update (id: number, data: Partial<ICnpj>): Promise<ICnpj | null> {
    const [affectedRows] = await this.model.update(data, { where: { id } })

    if (affectedRows === 0) return null

    return await this.findById(id)
  }

  async create (data: NewEntity<ICnpj>): Promise<ICnpj> {
    const dbData = await this.model.create(data)
    return dbData
  }

  async destroy(id: number): Promise<number> {
    return this.model.destroy({ where: { id } })
  }
}
