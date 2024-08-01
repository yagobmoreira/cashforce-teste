import Order from 'src/database/models/Order'
import { type IOrder } from 'src/interfaces/orders/IOrder'
import { type IOrderModel } from 'src/interfaces/orders/IOrderModel'

export default class OrderModel implements IOrderModel {
  private readonly model = Order

  async findAll (): Promise<IOrder[]> {
    const dbData = await this.model.findAll()

    return dbData
  }
}
