import { type Request, type Response } from 'express'
import OfferService from '../services/OfferService';
import mapStatusHTTP from '../utils/mapStatusHTTP';

export default class OfferController {
  constructor(
    private readonly offerService = new OfferService()
  ) {}

  public async getAllOffers(req: Request, res: Response) {
    const serviceResponse = await this.offerService.getAllOffers()
    res.status(200).json(serviceResponse.data)
  }

  public async getOfferById (req: Request, res: Response) {
    const { id } = req.params
    const { status, data } = await this.offerService.getOfferById(Number(id))

    if (status !== 'SUCCESSFUL') {
      return res.status(mapStatusHTTP(status)).json(data)
    }
    return res.status(200).json(data)
  }

  public async createOffer(req: Request, res: Response) {
    const { data } = await this.offerService.createOffer(req.body)

    return res.status(201).json(data)
  }

  public async updateOffer (req: Request, res: Response) {
    const { id } = req.params

    const { status, data } = await this.offerService.updateOffer(Number(id), req.body)

    if (status !== 'SUCCESSFUL') {
      return res.status(mapStatusHTTP(status)).json(data)
    }

    res.status(200).json(data);
  }

  public async deleteOffer(req: Request, res: Response) {
    const id = Number(req.params.id);

    const { status, data } = await this.offerService.deleteOffer(id);

    if (status !== 'SUCCESSFUL') {
      return res.status(mapStatusHTTP(status)).json(data)
    }

    res.status(200).json(data);
  }
}