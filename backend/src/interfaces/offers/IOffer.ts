import { type Identifiable } from '..'

export interface IOffer extends Identifiable {
  tax: string
  tariff: string
  adValorem: string
  float: string
  iof: string
  expiresIn: Date
  paymentStatusSponsor: number
  paymentStatusProvider: number
  createdAt: Date
  updatedAt: Date
  orderId: number
  sponsorId: number
}
