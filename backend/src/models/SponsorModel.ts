import Sponsor from '../database/models/Sponsor'
import { NewEntity, type ID } from '../interfaces'
import { ISponsor } from '../interfaces/sponsors/ISponsor'
import { ISponsorModel } from '../interfaces/sponsors/ISponsorModel'

export default class SponsorModel implements ISponsorModel {
  private readonly model = Sponsor

  async findById (id: ID): Promise<ISponsor | null> {
    const dbData = await this.model.findByPk(id)

    if (dbData === null) return null

    return dbData.dataValues
  }

  async findAll (): Promise<ISponsor[]> {
    const dbData = await this.model.findAll()

    return dbData
  }

  async update (id: number, data: Partial<ISponsor>): Promise<ISponsor | null> {
    const [affectedRows] = await this.model.update(data, { where: { id } })

    if (affectedRows === 0) return null

    return await this.findById(id)
  }

  async create (data: NewEntity<ISponsor>): Promise<ISponsor> {
    const dbData = await this.model.create(data)
    return dbData
  }
}
