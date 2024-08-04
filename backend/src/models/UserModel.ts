import Provider from 'src/database/models/Provider'
import User from 'src/database/models/User'
import { NewEntity, type ID } from 'src/interfaces'
import { IUser } from 'src/interfaces/users/IUser'
import { IUserModel } from 'src/interfaces/users/IUserModel'

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
