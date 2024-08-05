import { type Request, type Response } from 'express'
import OrderPortionService from '../services/OrderPortionService';
import mapStatusHTTP from '../utils/mapStatusHTTP';

export default class OrderPortionController {
  constructor(
    private readonly orderPortionService = new OrderPortionService()
  ) {}

  public async getAllOrderPortions(req: Request, res: Response) {
    const serviceResponse = await this.orderPortionService.getAllOrderPortions()
    res.status(200).json(serviceResponse.data)
  }

  public async getOrderPortionById (req: Request, res: Response) {
    const { id } = req.params
    const { status, data } = await this.orderPortionService.getOrderPortionById(Number(id))

    if (status !== 'SUCCESSFUL') {
      return res.status(mapStatusHTTP(status)).json(data)
    }
    return res.status(200).json(data)
  }

  public async createOrderPortion(req: Request, res: Response) {
    const { data } = await this.orderPortionService.createOrderPortion(req.body)

    return res.status(201).json(data)
  }

  public async updateOrderPortion (req: Request, res: Response) {
    const { id } = req.params

    const { status, data } = await this.orderPortionService.updateOrderPortion(Number(id), req.body)

    if (status !== 'SUCCESSFUL') {
      return res.status(mapStatusHTTP(status)).json(data)
    }

    res.status(200).json(data);
  }
}