import Provider from '../database/models/Provider'
import User from '../database/models/User'
import { NewEntity, type ID } from '../interfaces'
import { IUser } from '../interfaces/users/IUser'
import { IUserModel } from '../interfaces/users/IUserModel'

export default class UserModel implements IUserModel {
  private readonly model = User

  async findById (id: ID): Promise<IUser | null> {
    const dbData = await this.model.findByPk(id)

    if (dbData === null) return null

    return dbData.dataValues
  }

  async findAll (): Promise<IUser[]> {
    const dbData = await this.model.findAll()

    return dbData
  }

  async update (id: number, data: Partial<IUser>): Promise<IUser | null> {
    const [affectedRows] = await this.model.update(data, { where: { id } })

    if (affectedRows === 0) return null

    return await this.findById(id)
  }

  async create (data: NewEntity<IUser>): Promise<IUser> {
    const dbData = await this.model.create(data)
    return dbData
  }
}
