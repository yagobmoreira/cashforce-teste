import { type Request, type Response } from 'express'
import ProviderService from "src/services/ProviderService";
import mapStatusHTTP from 'src/utils/mapStatusHTTP';

export default class ProviderController {
  constructor(
    private readonly providerService = new ProviderService()
  ) {}

  public async getAllProviders(req: Request, res: Response) {
    const serviceResponse = await this.providerService.getAllProviders()
    res.status(200).json(serviceResponse.data)
  }

  public async getProviderById (req: Request, res: Response) {
    const { id } = req.params
    const { status, data } = await this.providerService.getProviderById(Number(id))

    if (status !== 'SUCCESSFUL') {
      return res.status(mapStatusHTTP(status)).json(data)
    }
    return res.status(200).json(data)
  }

  public async createProvider(req: Request, res: Response) {
    const { data } = await this.providerService.createProvider(req.body)

    return res.status(201).json(data)
  }

  public async updateProvider (req: Request, res: Response) {
    const { id } = req.params

    const { status, data } = await this.providerService.getProviderById(Number(id))

    if (status !== 'SUCCESSFUL') {
      return res.status(mapStatusHTTP(status)).json(data)
    }

    res.status(200).json(data);
  }
}