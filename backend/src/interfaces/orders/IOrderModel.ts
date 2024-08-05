import { type ID } from '..'
import { type IOrder } from './IOrder'
import { type IOrderWithRelations } from './IOrderWithRelations'
import { type ICRUDModelUpdater, type ICRUDModelCreator } from '../ICRUDModel'

export interface IOrderModel extends ICRUDModelUpdater<IOrder>, ICRUDModelCreator<IOrder> {
  findAll: () => Promise<IOrderWithRelations[]>
  findById: (id: ID) => Promise<IOrder | null>
  destroy: (id: number) => Promise<number>
}
