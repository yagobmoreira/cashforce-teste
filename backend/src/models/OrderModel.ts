import Buyer from 'src/database/models/Buyer'
import Order from 'src/database/models/Order'
import Provider from 'src/database/models/Provider'
import { type ID } from 'src/interfaces'
import { type IOrder } from 'src/interfaces/orders/IOrder'
import { type IOrderModel } from 'src/interfaces/orders/IOrderModel'
import { type IOrderWithRelations } from 'src/interfaces/orders/IOrderWithRelations'

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
        { model: Provider, attributes: ['id', 'name'] }]
    }) as unknown as IOrderWithRelations[]

    return dbData
  }
}
