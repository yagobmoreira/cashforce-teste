import { type IOrder } from 'src/interfaces/orders/IOrder'
import { type IOrderModel } from 'src/interfaces/orders/IOrderModel'
import { type ServiceResponse } from 'src/interfaces/ServiceResponse'
import OrderModel from 'src/models/OrderModel'

export default class BookService {
  constructor (
    private readonly orderModel: IOrderModel = new OrderModel()
  ) {}

  public async getAllOrders (): Promise<ServiceResponse<IOrder[]>> {
    const allOrders = await this.orderModel.findAll()
    return { status: 'SUCCESSFUL', data: allOrders }
  }
}
