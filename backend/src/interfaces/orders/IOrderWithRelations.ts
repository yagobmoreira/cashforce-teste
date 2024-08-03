import { type IBuyer } from '../buyers/IBuyer'
import { type IProvider } from '../providers/IProvider'
import { type IOrder } from './IOrder'

export interface IOrderWithRelations extends IOrder {
  Buyer: Pick<IBuyer, 'id' | 'name'>
  Provider: Pick<IProvider, 'id' | 'name'>
}
