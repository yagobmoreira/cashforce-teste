import { NewEntity, type ID } from '../interfaces'
import { IBuyerModel } from '../interfaces/buyers/IBuyerModel'
import Buyer from '../database/models/Buyer'
import { IBuyer } from '../interfaces/buyers/IBuyer'
import { where } from 'sequelize'

export default class BuyerModel implements IBuyerModel {
  private readonly model = Buyer

  async findById (id: ID): Promise<IBuyer | null> {
    const dbData = await this.model.findByPk(id)

    if (dbData === null) return null

    return dbData.dataValues
  }

  async findAll (): Promise<IBuyer[]> {
    const dbData = await this.model.findAll()

    return dbData
  }

  async update (id: number, data: Partial<IBuyer>): Promise<IBuyer | null> {
    const [affectedRows] = await this.model.update(data, { where: { id } })

    if (affectedRows === 0) return null

    return await this.findById(id)
  }

  async create (data: NewEntity<IBuyer>): Promise<IBuyer> {
    const dbData = await this.model.create(data)
    return dbData
  }

  async destroy(id: number): Promise<number> {
    return this.model.destroy({ where: { id } })
  }
}
