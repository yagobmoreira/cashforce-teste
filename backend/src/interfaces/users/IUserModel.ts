import { ICRUDModelCreator, ICRUDModelUpdater, type ICRUDModelReader } from '../ICRUDModel'
import { IUser } from './IUser'

export interface IUserModel extends ICRUDModelReader<IUser>, ICRUDModelCreator<IUser>, ICRUDModelUpdater<IUser> {}