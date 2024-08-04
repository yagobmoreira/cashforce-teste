import { type Request, type Response } from 'express'
import CnpjService from "src/services/CnpjService";
import mapStatusHTTP from 'src/utils/mapStatusHTTP';

export default class CnpjController {
  constructor(
    private readonly cnpjService = new CnpjService()
  ) {}

  public async getAllCnpjs(req: Request, res: Response) {
    const serviceResponse = await this.cnpjService.getAllCnpjs()
    res.status(200).json(serviceResponse.data)
  }

  public async getCnpjById (req: Request, res: Response) {
    const { id } = req.params
    const { status, data } = await this.cnpjService.getCnpjById(Number(id))

    if (status !== 'SUCCESSFUL') {
      return res.status(mapStatusHTTP(status)).json(data)
    }
    return res.status(200).json(data)
  }

  public async createCnpj(req: Request, res: Response) {
    const { data } = await this.cnpjService.createCnpj(req.body)

    return res.status(201).json(data)
  }

  public async updateCnpj (req: Request, res: Response) {
    const { id } = req.params

    const { status, data } = await this.cnpjService.getCnpjById(Number(id))

    if (status !== 'SUCCESSFUL') {
      return res.status(mapStatusHTTP(status)).json(data)
    }

    res.status(200).json(data);
  }
}