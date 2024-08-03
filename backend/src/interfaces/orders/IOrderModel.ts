import { type ID } from '..'
import { type IOrder } from './IOrder'
import { type IOrderWithRelations } from './IOrderWithRelations'

export interface IOrderModel {
  findAll: () => Promise<IOrderWithRelations[]>
  findById: (id: ID) => Promise<IOrder | null>
}
