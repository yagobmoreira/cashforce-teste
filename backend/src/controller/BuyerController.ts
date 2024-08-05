import { type Request, type Response } from 'express'
import BuyerService from '../services/BuyerService';
import mapStatusHTTP from '../utils/mapStatusHTTP';

export default class BuyerController {
  constructor(
    private readonly buyerService = new BuyerService()
  ) {}

  public async getAllBuyers(req: Request, res: Response) {
    const serviceResponse = await this.buyerService.getAllBuyers()
    res.status(200).json(serviceResponse.data)
  }

  public async getBuyerById (req: Request, res: Response) {
    const { id } = req.params
    const { status, data } = await this.buyerService.getBuyerById(Number(id))

    if (status !== 'SUCCESSFUL') {
      return res.status(mapStatusHTTP(status)).json(data)
    }
    return res.status(200).json(data)
  }

  public async createBuyer(req: Request, res: Response) {
    const { data } = await this.buyerService.createBuyer(req.body)

    return res.status(201).json(data)
  }

  public async updateBuyer (req: Request, res: Response) {
    const { id } = req.params

    const { status, data } = await this.buyerService.updateBuyer(Number(id), req.body)

    if (status !== 'SUCCESSFUL') {
      return res.status(mapStatusHTTP(status)).json(data)
    }

    res.status(200).json(data);
  }

  public async deleteBuyer(req: Request, res: Response) {
    const id = Number(req.params.id);

    const { status, data } = await this.buyerService.deleteBuyer(id);

    if (status !== 'SUCCESSFUL') {
      return res.status(mapStatusHTTP(status)).json(data)
    }

    res.status(200).json(data);
  }
}