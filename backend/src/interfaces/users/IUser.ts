import { type Identifiable } from '..'

export interface IUser extends Identifiable {
  name: string
  email: string
  phoneNumber: string
  mobile: string
  departament: string
  verificationCode: string
  emailChecked: number
  createdAt: Date
  updatedAt: Date
  cashforceAdm: number
}
