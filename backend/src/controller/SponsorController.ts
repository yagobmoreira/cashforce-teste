import { type Request, type Response } from 'express'
import SponsorService from 'src/services/SponsorService';
import mapStatusHTTP from 'src/utils/mapStatusHTTP';

export default class SponsorController {
  constructor(
    private readonly sponsorService = new SponsorService()
  ) {}

  public async getAllSponsors(req: Request, res: Response) {
    const serviceResponse = await this.sponsorService.getAllSponsors()
    res.status(200).json(serviceResponse.data)
  }

  public async getSponsorById (req: Request, res: Response) {
    const { id } = req.params
    const { status, data } = await this.sponsorService.getSponsorById(Number(id))

    if (status !== 'SUCCESSFUL') {
      return res.status(mapStatusHTTP(status)).json(data)
    }
    return res.status(200).json(data)
  }

  public async createSponsor(req: Request, res: Response) {
    const { data } = await this.sponsorService.createSponsor(req.body)

    return res.status(201).json(data)
  }

  public async updateSponsor (req: Request, res: Response) {
    const { id } = req.params

    const { status, data } = await this.sponsorService.getSponsorById(Number(id))

    if (status !== 'SUCCESSFUL') {
      return res.status(mapStatusHTTP(status)).json(data)
    }

    res.status(200).json(data);
  }
}