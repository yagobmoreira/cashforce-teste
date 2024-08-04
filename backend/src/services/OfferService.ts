import { type NewEntity } from 'src/interfaces'
import { type ServiceMessage, type ServiceResponse } from 'src/interfaces/ServiceResponse'
import { IOffer } from 'src/interfaces/offers/IOffer'
import { IOfferModel } from 'src/interfaces/offers/IOfferModel'
import OfferModel from 'src/models/OfferModel'

export default class OfferService {
  constructor (
    private readonly offerModel: IOfferModel = new OfferModel()
  ) {}

  public async getAllOffers (): Promise<ServiceResponse<IOffer[]>> {
    const allOffers = await this.offerModel.findAll()
    return { status: 'SUCCESSFUL', data: allOffers }
  }

  public async getOfferById (id: number): Promise<ServiceResponse<IOffer>> {
    const foundOffer = await this.offerModel.findById(id)

    if (foundOffer == null) return { status: 'NOT_FOUND', data: { message: `Offer ${id} not found` } }

    return { status: 'SUCCESSFUL', data: foundOffer }
  }

  public async createOffer (offer: NewEntity<IOffer>): Promise<ServiceResponse<IOffer>> {
    const createdOffer = await this.offerModel.create(offer)

    return { status: 'SUCCESSFUL', data: createdOffer }
  }

  public async updateOffer (id: number, offer: NewEntity<IOffer>): Promise<ServiceResponse<ServiceMessage>> {
    const foundOffer = await this.offerModel.findById(id)

    if (foundOffer == null) return { status: 'NOT_FOUND', data: { message: `Offer ${id} not found` } }

    await this.offerModel.update(id, offer)

    return { status: 'SUCCESSFUL', data: { message: 'Offer updated' } }
  }
}
