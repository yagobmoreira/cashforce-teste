import { type IOrder } from './IOrder'

export interface IOrderModel {
  findAll: () => Promise<IOrder[]>
}
