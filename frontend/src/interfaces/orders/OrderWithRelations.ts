import type { IBuyer } from "../Buyer"
import type { IOrder } from "./Order"
import type { IProvider } from "../Provider"

export interface IOrderWithRelations extends IOrder {
  buyer: Pick<IBuyer, 'id' | 'name'>
  provider: Pick<IProvider, 'id' | 'name' | 'tradingName' | 'website' | 'phoneNumber' | 'email'>
}