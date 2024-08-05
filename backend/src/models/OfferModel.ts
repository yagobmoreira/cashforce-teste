import Offer from '../database/models/Offer'
import { NewEntity, type ID } from '../interfaces'
import { IOffer } from '../interfaces/offers/IOffer'
import { IOfferModel } from '../interfaces/offers/IOfferModel'

export default class OfferModel implements IOfferModel {
  private readonly model = Offer

  async findById (id: ID): Promise<IOffer | null> {
    const dbData = await this.model.findByPk(id)

    if (dbData === null) return null

    return dbData.dataValues
  }

  async findAll (): Promise<IOffer[]> {
    const dbData = await this.model.findAll()

    return dbData
  }

  async update (id: number, data: Partial<IOffer>): Promise<IOffer | null> {
    const [affectedRows] = await this.model.update(data, { where: { id } })

    if (affectedRows === 0) return null

    return await this.findById(id)
  }

  async create (data: NewEntity<IOffer>): Promise<IOffer> {
    const dbData = await this.model.create(data)
    return dbData
  }
}
