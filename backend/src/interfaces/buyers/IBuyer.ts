import { type Identifiable } from '..'

export interface IBuyer extends Identifiable {
  name: string
  tradingName: string
  cashforceTax: string
  responsibleName: string
  responsibleEmail: string
  responsiblePosition: string
  responsiblePhone: string
  responsibleMobile: string
  website: string
  postalCode: string
  address: string
  number: string
  complement: string
  neighborhood: string
  city: string
  state: string
  phoneNumber: string
  situation: string
  situationDate: string
  createdAt: Date
  updatedAt: Date
  cnpjId: number
  confirm: number
  email: string
}
