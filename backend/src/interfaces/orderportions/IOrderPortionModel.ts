import { ICRUDModelCreator, ICRUDModelUpdater, type ICRUDModelReader } from '../ICRUDModel'
import { IOrderPortion } from './IOrderPortion'

export interface IOrderPortionModel extends ICRUDModelReader<IOrderPortion>, ICRUDModelCreator<IOrderPortion>, ICRUDModelUpdater<IOrderPortion> {
  destroy: (id: number) => Promise<number>
}