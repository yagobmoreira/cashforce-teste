import { type NewEntity } from 'src/interfaces'
import { type IOrder } from 'src/interfaces/orders/IOrder'
import { type IOrderModel } from 'src/interfaces/orders/IOrderModel'
import { type IOrderWithRelations } from 'src/interfaces/orders/IOrderWithRelations'
import { type ServiceMessage, type ServiceResponse } from 'src/interfaces/ServiceResponse'
import OrderModel from 'src/models/OrderModel'

export default class OrderService {
  constructor (
    private readonly orderModel: IOrderModel = new OrderModel()
  ) {}

  public async getAllOrders (): Promise<ServiceResponse<IOrderWithRelations[]>> {
    const allOrders = await this.orderModel.findAll()
    return { status: 'SUCCESSFUL', data: allOrders }
  }

  public async getOrderById (id: number): Promise<ServiceResponse<IOrder>> {
    const foundOrder = await this.orderModel.findById(id)

    if (foundOrder == null) return { status: 'NOT_FOUND', data: { message: `Order ${id} not found` } }

    return { status: 'SUCCESSFUL', data: foundOrder }
  }

  public async createOrder (order: NewEntity<IOrder>): Promise<ServiceResponse<IOrder>> {
    const createdOrder = await this.orderModel.create(order)

    return { status: 'SUCCESSFUL', data: createdOrder }
  }

  public async updateOrder (id: number, order: NewEntity<IOrder>): Promise<ServiceResponse<ServiceMessage>> {
    const foundOrder = await this.orderModel.findById(id)

    if (foundOrder == null) {
      return { status: 'NOT_FOUND', data: { message: `Order ${id} not found` } }
    }

    await this.orderModel.update(id, order)
    return { status: 'SUCCESSFUL', data: { message: 'Order updated' } }
  }
}
