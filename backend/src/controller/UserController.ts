import { type Request, type Response } from 'express'
import UserService from '../services/UserService';
import mapStatusHTTP from '../utils/mapStatusHTTP';

export default class UserController {
  constructor(
    private readonly userService = new UserService()
  ) {}

  public async getAllUsers(req: Request, res: Response) {
    const serviceResponse = await this.userService.getAllUsers()
    res.status(200).json(serviceResponse.data)
  }

  public async getUserById (req: Request, res: Response) {
    const { id } = req.params
    const { status, data } = await this.userService.getUserById(Number(id))

    if (status !== 'SUCCESSFUL') {
      return res.status(mapStatusHTTP(status)).json(data)
    }
    return res.status(200).json(data)
  }

  public async createUser(req: Request, res: Response) {
    const { data } = await this.userService.createUser(req.body)

    return res.status(201).json(data)
  }

  public async updateUser (req: Request, res: Response) {
    const { id } = req.params

    const { status, data } = await this.userService.updateUser(Number(id), req.body)

    if (status !== 'SUCCESSFUL') {
      return res.status(mapStatusHTTP(status)).json(data)
    }

    res.status(200).json(data);
  }

  public async deleteUser(req: Request, res: Response) {
    const id = Number(req.params.id);

    const { status, data } = await this.userService.deleteUser(id);

    if (status !== 'SUCCESSFUL') {
      return res.status(mapStatusHTTP(status)).json(data)
    }

    res.status(200).json(data);
  }
}