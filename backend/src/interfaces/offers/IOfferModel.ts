import { ICRUDModelCreator, ICRUDModelUpdater, type ICRUDModelReader } from '../ICRUDModel'
import { IOffer } from './IOffer'

export interface IOfferModel extends ICRUDModelReader<IOffer>, ICRUDModelCreator<IOffer>, ICRUDModelUpdater<IOffer> {
  destroy: (id: number) => Promise<number>
}