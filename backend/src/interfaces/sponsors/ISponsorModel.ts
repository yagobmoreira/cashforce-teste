import { ICRUDModelCreator, ICRUDModelUpdater, type ICRUDModelReader } from '../ICRUDModel'
import { ISponsor } from './ISponsor'

export interface ISponsorModel extends ICRUDModelReader<ISponsor>, ICRUDModelCreator<ISponsor>, ICRUDModelUpdater<ISponsor> {}