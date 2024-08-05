import { type NewEntity } from 'src/interfaces'
import { type ServiceMessage, type ServiceResponse } from 'src/interfaces/ServiceResponse'
import UserModel from 'src/models/UserModel'
import { IUser } from 'src/interfaces/users/IUser'
import { IUserModel } from 'src/interfaces/users/IUserModel'

export default class UserService {
  constructor (
    private readonly userModel: IUserModel = new UserModel()
  ) {}

  public async getAllUsers (): Promise<ServiceResponse<IUser[]>> {
    const allUsers = await this.userModel.findAll()
    return { status: 'SUCCESSFUL', data: allUsers }
  }

  public async getUserById (id: number): Promise<ServiceResponse<IUser>> {
    const foundUser = await this.userModel.findById(id)

    if (foundUser == null) return { status: 'NOT_FOUND', data: { message: `User ${id} not found` } }

    return { status: 'SUCCESSFUL', data: foundUser }
  }

  public async createUser (user: NewEntity<IUser>): Promise<ServiceResponse<IUser>> {
    const createdUser = await this.userModel.create(user)

    return { status: 'SUCCESSFUL', data: createdUser }
  }

  public async updateUser (id: number, user: NewEntity<IUser>): Promise<ServiceResponse<ServiceMessage>> {
    const foundUser = await this.userModel.findById(id)

    if (foundUser == null) return { status: 'NOT_FOUND', data: { message: `User ${id} not found` } }

    await this.userModel.update(id, user)

    return { status: 'SUCCESSFUL', data: { message: 'User updated' } }
  }
}
