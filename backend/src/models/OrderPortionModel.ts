import OrderPortion from 'src/database/models/OrderPortion'
import { NewEntity, type ID } from 'src/interfaces'
import { IOrderPortion } from 'src/interfaces/orderportions/IOrderPortion'
import { IOrderPortionModel } from 'src/interfaces/orderportions/IOrderPortionModel'

export default class OrderPortionModel implements IOrderPortionModel {
  private readonly model = OrderPortion

  async findById (id: ID): Promise<IOrderPortion | null> {
    const dbData = await this.model.findByPk(id)

    if (dbData === null) return null

    return dbData.dataValues
  }

  async findAll (): Promise<IOrderPortion[]> {
    const dbData = await this.model.findAll()

    return dbData
  }

  async update (id: number, data: Partial<IOrderPortion>): Promise<IOrderPortion | null> {
    const [affectedRows] = await this.model.update(data, { where: { id } })

    if (affectedRows === 0) return null

    return await this.findById(id)
  }

  async create (data: NewEntity<IOrderPortion>): Promise<IOrderPortion> {
    const dbData = await this.model.create(data)
    return dbData
  }
}
