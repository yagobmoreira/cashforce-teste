import { AutoIncrement, Column, DataType, Model, PrimaryKey, Table } from 'sequelize-typescript'
import { type CreationOptional, type Optional } from 'sequelize'
import { type IOrder } from 'src/interfaces/orders/IOrder'

interface OrderCreationAttributes extends Optional<IOrder, 'id'> {}

@Table({
  tableName: 'orders',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  modelName: 'orders'
})
export default class Order extends Model<IOrder, OrderCreationAttributes> {
  @AutoIncrement
  @PrimaryKey
  @Column({
    type: DataType.INTEGER('11'),
    allowNull: false
  })
  declare id: CreationOptional<number>

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  declare orderNfId: string

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  declare orderNumber: string

  @Column({
    type: DataType.STRING,
    defaultValue: null
  })
  declare orderPath: string

  @Column({
    type: DataType.STRING,
    defaultValue: null
  })
  declare orderFileName: string

  @Column({
    type: DataType.STRING,
    defaultValue: null
  })
  declare orderOriginalName: string

  @Column({
    type: DataType.STRING,
    defaultValue: null
  })
  declare emissionDate: string

  @Column({
    type: DataType.STRING,
    defaultValue: null
  })
  declare pdfFile: string

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  declare emitedTo: string

  @Column({
    type: DataType.STRING,
    defaultValue: null
  })
  declare nNf: string

  @Column({
    type: DataType.STRING,
    defaultValue: null
  })
  declare CTE: string

  @Column({
    type: DataType.STRING,
    defaultValue: null
  })
  declare value: string

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
    type: DataType.INTEGER('11'),
    defaultValue: null
  })
  declare cnpjId: number

  @Column({
    type: DataType.INTEGER('11'),
    defaultValue: null
  })
  declare userId: number

  @Column({
    type: DataType.INTEGER('11'),
    defaultValue: null
  })
  declare buyerId: number

  @Column({
    type: DataType.INTEGER('11'),
    defaultValue: null
  })
  declare providerId: number

  @Column({
    type: DataType.STRING,
    defaultValue: '0'
  })
  declare orderStatusBuyer: string

  @Column({
    type: DataType.STRING,
    defaultValue: '0'
  })
  declare orderStatusProvider: string

  @Column({
    type: DataType.STRING,
    defaultValue: null
  })
  declare deliveryReceipt: string

  @Column({
    type: DataType.STRING,
    defaultValue: null
  })
  declare cargoPackingList: string

  @Column({
    type: DataType.STRING,
    defaultValue: null
  })
  declare deliveryCtrc: string
}
