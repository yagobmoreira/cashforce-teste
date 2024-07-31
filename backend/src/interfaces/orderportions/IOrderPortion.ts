import { type Identifiable } from '..'

export interface IOrderPortion extends Identifiable {
  nDup: string
  dVenc: string
  vDup: string
  availableToMarket: number
  createdAt: Date
  updatedAt: Date
  orderId: number
}
