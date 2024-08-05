import { ICRUDModelCreator, ICRUDModelUpdater, type ICRUDModelReader } from '../ICRUDModel'
import { ICnpj } from './ICnpj'

export interface ICnpjModel extends ICRUDModelReader<ICnpj>, ICRUDModelCreator<ICnpj>, ICRUDModelUpdater<ICnpj> {
  destroy: (id: number) => Promise<number>
}