import { AutoIncrement, Column, DataType, ForeignKey, Model, PrimaryKey, Table } from 'sequelize-typescript'
import { type CreationOptional, type Optional } from 'sequelize'
import { type IOrderPortion } from 'src/interfaces/orderportions/IOrderPortion'
import Order from '../order/order.model'

interface OrderPortionCreationAttributes extends Optional<IOrderPortion, 'id'> {}

@Table({
  tableName: 'orderportions',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  modelName: 'orderportions'
})
export default class OrderPortion extends Model<IOrderPortion, OrderPortionCreationAttributes> {
  @AutoIncrement
  @PrimaryKey
  @Column({
    type: DataType.INTEGER({ length: 11 }),
    allowNull: false
  })
  declare id: CreationOptional<number>

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  declare nDup: string

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  declare dVenc: string

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  declare vDup: string

  @Column({
    type: DataType.TINYINT({ length: 1 }),
    defaultValue: 1
  })
  declare availableToMarket: number

  @Column({
    type: DataType.DATE,
    allowNull: false
  })
  declare createdAt: Date

  @Column({
    type: DataType.DATE,
    allowNull: false
  })
  declare updatedAt: Date

  @Column({
    type: DataType.INTEGER({ length: 11 }),
    defaultValue: null,
    references: {
      model: Order,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  })
  @ForeignKey(() => Order)
  declare orderId: number
}
