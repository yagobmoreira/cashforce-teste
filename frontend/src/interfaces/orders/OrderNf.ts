import type { IBuyer } from "../Buyer"
import type { IProvider } from "../Provider"

export type OrderNf = {
  nNf: string,
  sacado:  Pick<IBuyer, 'id' | 'name'>,
  cedente: Pick<IProvider, 'id' | 'name' | 'tradingName' | 'website' | 'phoneNumber' | 'email'>,
  emissionDate: string,
  value: string,
  status: string,
}