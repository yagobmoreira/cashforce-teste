import { type NewEntity } from 'src/interfaces'
import { type ServiceMessage, type ServiceResponse } from 'src/interfaces/ServiceResponse'
import { IOrderPortion } from 'src/interfaces/orderportions/IOrderPortion'
import { IOrderPortionModel } from 'src/interfaces/orderportions/IOrderPortionModel'
import OrderPortionModel from 'src/models/OrderPortionModel'

export default class OrderPortionService {
  constructor (
    private readonly orderPortionModel: IOrderPortionModel = new OrderPortionModel()
  ) {}

  public async getAllOrderPortions (): Promise<ServiceResponse<IOrderPortion[]>> {
    const allOrderPortions = await this.orderPortionModel.findAll()
    return { status: 'SUCCESSFUL', data: allOrderPortions }
  }

  public async getOrderPortionById (id: number): Promise<ServiceResponse<IOrderPortion>> {
    const foundOrderPortion = await this.orderPortionModel.findById(id)

    if (foundOrderPortion == null) return { status: 'NOT_FOUND', data: { message: `OrderPortion ${id} not found` } }

    return { status: 'SUCCESSFUL', data: foundOrderPortion }
  }

  public async createOrderPortion (orderPortion: NewEntity<IOrderPortion>): Promise<ServiceResponse<IOrderPortion>> {
    const createdOrderPortion = await this.orderPortionModel.create(orderPortion)

    return { status: 'SUCCESSFUL', data: createdOrderPortion }
  }

  public async updateOrderPortion (id: number, orderPortion: NewEntity<IOrderPortion>): Promise<ServiceResponse<ServiceMessage>> {
    const foundOrderPortion = await this.orderPortionModel.findById(id)

    if (foundOrderPortion == null) return { status: 'NOT_FOUND', data: { message: `OrderPortion ${id} not found` } }

    await this.orderPortionModel.update(id, orderPortion)

    return { status: 'SUCCESSFUL', data: { message: 'OrderPortion updated' } }
  }
}
