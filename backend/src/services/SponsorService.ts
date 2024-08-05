import { type NewEntity } from '../interfaces'
import { type ServiceMessage, type ServiceResponse } from '../interfaces/ServiceResponse'
import { ISponsor } from '../interfaces/sponsors/ISponsor'
import { ISponsorModel } from '../interfaces/sponsors/ISponsorModel'
import SponsorModel from '../models/SponsorModel'

export default class SponsorService {
  constructor (
    private readonly sponsorModel: ISponsorModel = new SponsorModel()
  ) {}

  public async getAllSponsors (): Promise<ServiceResponse<ISponsor[]>> {
    const allSponsors = await this.sponsorModel.findAll()
    return { status: 'SUCCESSFUL', data: allSponsors }
  }

  public async getSponsorById (id: number): Promise<ServiceResponse<ISponsor>> {
    const foundSponsor = await this.sponsorModel.findById(id)

    if (foundSponsor == null) return { status: 'NOT_FOUND', data: { message: `Sponsor ${id} not found` } }

    return { status: 'SUCCESSFUL', data: foundSponsor }
  }

  public async createSponsor (Sponsor: NewEntity<ISponsor>): Promise<ServiceResponse<ISponsor>> {
    const createdSponsor = await this.sponsorModel.create(Sponsor)

    return { status: 'SUCCESSFUL', data: createdSponsor }
  }

  public async updateSponsor (id: number, sponsor: NewEntity<ISponsor>): Promise<ServiceResponse<ServiceMessage>> {
    const foundSponsor = await this.sponsorModel.findById(id)

    if (foundSponsor == null) return { status: 'NOT_FOUND', data: { message: `Sponsor ${id} not found` } }

    await this.sponsorModel.update(id, sponsor)

    return { status: 'SUCCESSFUL', data: { message: 'Sponsor updated' } }
  }

  public async deleteSponsor(id: number): Promise<ServiceResponse<ServiceMessage>> {
    const foundSponsor = await this.sponsorModel.findById(id);

    if (foundSponsor == null) return { status: 'NOT_FOUND', data: { message: `Sponsor ${id} not found` } }

    await this.sponsorModel.destroy(id)
    
    return { status: 'SUCCESSFUL', data: { message: 'Sponsor deleted' } };
  }
}
