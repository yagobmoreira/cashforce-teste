import { BelongsTo, Column, DataType, ForeignKey, Model, Table, Unique } from 'sequelize-typescript'
import { type IOrder } from 'src/interfaces/orders/IOrder'
import Buyer from './Buyer'
import Cnpj from './Cnpj'
import Provider from './Provider'
import User from './User'
import { type Optional } from 'sequelize'

interface OrderCreationAttributes extends Optional<IOrder, 'id'> {}

@Table({
  tableName: 'orders',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  modelName: 'Order'
})
export default class Order extends Model<IOrder, OrderCreationAttributes> {
  @Column({
    type: DataType.INTEGER({ length: 11 }),
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  })
  declare id: number

  @Unique
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

  @Unique
  @Column({
    type: DataType.STRING,
    defaultValue: null
  })
  declare orderPath: string

  @Unique
  @Column({
    type: DataType.STRING,
    defaultValue: null
  })
  declare orderFileName: string

  @Unique
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

  @ForeignKey(() => Cnpj)
  @Column({
    type: DataType.INTEGER({ length: 11 }),
    defaultValue: null,
    references: {
      model: 'cnpjs',
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  })
  declare cnpjId: number

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER({ length: 11 }),
    defaultValue: null,
    references: {
      model: 'users',
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  })
  declare userId: number

  @ForeignKey(() => Buyer)
  @Column({
    type: DataType.INTEGER({ length: 11 }),
    defaultValue: null,
    references: {
      model: 'buyers',
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  })
  declare buyerId: number

  @ForeignKey(() => Provider)
  @Column({
    type: DataType.INTEGER({ length: 11 }),
    defaultValue: null,
    references: {
      model: 'providers',
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
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

  @BelongsTo(() => Buyer)
  declare buyer: Buyer

  @BelongsTo(() => Cnpj)
  declare cnpj: Cnpj

  @BelongsTo(() => User)
  declare user: User

  @BelongsTo(() => Provider)
  declare provider: Provider
}
