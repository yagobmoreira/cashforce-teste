import { type NewEntity } from '../interfaces'
import { type ServiceMessage, type ServiceResponse } from '../interfaces/ServiceResponse'
import { IBuyer } from '../interfaces/buyers/IBuyer'
import { IBuyerModel } from '../interfaces/buyers/IBuyerModel'
import BuyerModel from '../models/BuyerModel'

export default class BuyerService {
  constructor (
    private readonly buyerModel: IBuyerModel = new BuyerModel()
  ) {}

  public async getAllBuyers (): Promise<ServiceResponse<IBuyer[]>> {
    const allBuyers = await this.buyerModel.findAll()
    return { status: 'SUCCESSFUL', data: allBuyers }
  }

  public async getBuyerById (id: number): Promise<ServiceResponse<IBuyer>> {
    const foundBuyer = await this.buyerModel.findById(id)

    if (foundBuyer == null) return { status: 'NOT_FOUND', data: { message: `Buyer ${id} not found` } }

    return { status: 'SUCCESSFUL', data: foundBuyer }
  }

  public async createBuyer (buyer: NewEntity<IBuyer>): Promise<ServiceResponse<IBuyer>> {
    const createdBuyer = await this.buyerModel.create(buyer)

    return { status: 'SUCCESSFUL', data: createdBuyer }
  }

  public async updateBuyer (id: number, buyer: NewEntity<IBuyer>): Promise<ServiceResponse<ServiceMessage>> {
    const foundBuyer = await this.buyerModel.findById(id)

    if (foundBuyer == null) return { status: 'NOT_FOUND', data: { message: `Buyer ${id} not found` } }

    await this.buyerModel.update(id, buyer)

    return { status: 'SUCCESSFUL', data: { message: 'Buyer updated' } }
  }
}
