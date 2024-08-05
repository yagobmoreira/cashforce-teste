import { ICRUDModelReader, ICRUDModelUpdater, ICRUDModelCreator, ICRUDModel } from "../ICRUDModel";
import { IBuyer } from "./IBuyer";

export interface IBuyerModel extends ICRUDModelReader<IBuyer>, ICRUDModelCreator<IBuyer>, ICRUDModelUpdater<IBuyer> {
  destroy: (id: number) => Promise<number>
}