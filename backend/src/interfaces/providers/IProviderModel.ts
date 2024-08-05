import { ICRUDModelCreator, ICRUDModelUpdater, type ICRUDModelReader } from '../ICRUDModel'
import { type IProvider } from './IProvider'

export interface IProviderModel extends ICRUDModelReader<IProvider>, ICRUDModelCreator<IProvider>, ICRUDModelUpdater<IProvider> {
  destroy: (id: number) => Promise<number>
}
