import { type Identifiable } from '..'

export interface ICnpj extends Identifiable {
  cnpj: string
  companyType: string
  createdAt: Date
  updatedAt: Date
}
