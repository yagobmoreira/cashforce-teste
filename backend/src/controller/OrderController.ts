import { type Request, type Response } from 'express'
import OrderService from '../services/OrderService'
import mapStatusHTTP from '../utils/mapStatusHTTP'

export default class OrderController {
  constructor (
    private readonly orderService = new OrderService()
  ) {}

  public async getAllOrders (_req: Request, res: Response) {
    const serviceResponse = await this.orderService.getAllOrders()
    res.status(200).json(serviceResponse.data)
  }

  public async getOrderById (req: Request, res: Response) {
    const { id } = req.params
    const { status, data } = await this.orderService.getOrderById(Number(id))

    if (status !== 'SUCCESSFUL') {
      return res.status(mapStatusHTTP(status)).json(data)
    }
    return res.status(200).json(data)
  }

  public async createOrder(req: Request, res: Response) {
    const { data } = await this.orderService.createOrder(req.body)

    return res.status(201).json(data)
  }

  public async updateOrder (req: Request, res: Response) {
    const { id } = req.params

    const { status, data } = await this.orderService.updateOrder(Number(id), req.body)

    if (status !== 'SUCCESSFUL') {
      return res.status(mapStatusHTTP(status)).json(data)
    }

    res.status(200).json(data);
  }

  public async deleteOrder(req: Request, res: Response) {
    const id = Number(req.params.id);

    const { status, data } = await this.orderService.deleteOrder(id);

    if (status !== 'SUCCESSFUL') {
      return res.status(mapStatusHTTP(status)).json(data)
    }

    res.status(200).json(data);
  }
}
