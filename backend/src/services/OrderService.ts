import { type IOrderModel } from 'src/interfaces/orders/IOrderModel'
import { type IOrderWithRelations } from 'src/interfaces/orders/IOrderWithRelations'
import { type ServiceResponse } from 'src/interfaces/ServiceResponse'
import OrderModel from 'src/models/OrderModel'

export default class BookService {
  constructor (
    private readonly orderModel: IOrderModel = new OrderModel()
  ) {}

  public async getAllOrders (): Promise<ServiceResponse<IOrderWithRelations[]>> {
    const allOrders = await this.orderModel.findAll()
    return { status: 'SUCCESSFUL', data: allOrders }
  }
}
