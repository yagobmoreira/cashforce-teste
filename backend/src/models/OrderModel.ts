import Buyer from '../database/models/Buyer'
import Order from '../database/models/Order'
import Provider from '../database/models/Provider'
import { type NewEntity, type ID } from '../interfaces'
import { type IOrder } from '../interfaces/orders/IOrder'
import { type IOrderModel } from '../interfaces/orders/IOrderModel'
import { type IOrderWithRelations } from '../interfaces/orders/IOrderWithRelations'

export default class OrderModel implements IOrderModel {
  private readonly model = Order

  async findById (id: ID): Promise<IOrder | null> {
    const dbData = await this.model.findByPk(id)

    if (dbData === null) return null

    return dbData.dataValues
  }

  async findAll (): Promise<IOrderWithRelations[]> {
    const dbData = await this.model.findAll({
      include: [{ model: Buyer, attributes: ['id', 'name'] },
        { model: Provider, attributes: ['id', 'name', 'tradingName', 'responsibleName', 'website', 'phoneNumber', 'email'] }]
    }) as unknown as IOrderWithRelations[]

    return dbData
  }

  async update (id: number, data: Partial<IOrder>): Promise<IOrder | null> {
    const [affectedRows] = await this.model.update(data, { where: { id } })

    if (affectedRows === 0) return null

    return await this.findById(id)
  }

  async create (data: NewEntity<IOrder>): Promise<IOrder> {
    const dbData = await this.model.create(data)
    return dbData
  }
}
