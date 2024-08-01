import { type CreationOptional, type Optional } from 'sequelize'
import { AutoIncrement, Column, DataType, ForeignKey, Model, PrimaryKey, Table, Unique } from 'sequelize-typescript'
import { type IOrder } from 'src/interfaces/orders/IOrder'
import Buyer from '../buyer/buyer.model'
import Cnpj from '../cnpj/cnpj.model'
import Provider from '../provider/provider.model'
import User from '../user/user.model'

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
    type: DataType.INTEGER({ length: 11 }),
    allowNull: false
  })
  declare id: CreationOptional<number>

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  @Unique
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
  @Unique
  declare orderPath: string

  @Column({
    type: DataType.STRING,
    defaultValue: null
  })
  @Unique
  declare orderFileName: string

  @Column({
    type: DataType.STRING,
    defaultValue: null
  })
  @Unique
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
    type: DataType.INTEGER({ length: 11 }),
    defaultValue: null,
    references: {
      model: Cnpj,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  })
  @ForeignKey(() => Cnpj)
  declare cnpjId: number

  @Column({
    type: DataType.INTEGER({ length: 11 }),
    defaultValue: null,
    references: {
      model: User,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  })
  @ForeignKey(() => User)
  declare userId: number

  @Column({
    type: DataType.INTEGER({ length: 11 }),
    defaultValue: null,
    references: {
      model: Buyer,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  })
  @ForeignKey(() => Buyer)
  declare buyerId: number

  @Column({
    type: DataType.INTEGER({ length: 11 }),
    defaultValue: null,
    references: {
      model: Provider,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  })
  @ForeignKey(() => Provider)
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
