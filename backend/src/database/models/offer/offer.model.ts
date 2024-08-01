import { AutoIncrement, Column, DataType, ForeignKey, Model, PrimaryKey, Table } from 'sequelize-typescript'
import { type CreationOptional, type Optional } from 'sequelize'
import { type IOffer } from 'src/interfaces/offers/IOffer'
import Order from '../order/order.model'
import Sponsor from '../sponsors/sponsor.model'

interface OfferCreationAttributes extends Optional<IOffer, 'id'> {}

@Table({
  tableName: 'offers',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  modelName: 'offers'
})
export default class Offer extends Model<IOffer, OfferCreationAttributes> {
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
  declare tax: string

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  declare tariff: string

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  declare adValorem: string

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  declare float: string

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  declare iof: string

  @Column({
    type: DataType.DATE,
    allowNull: false
  })
  declare expiresIn: Date

  @Column({
    type: DataType.TINYINT({ length: 1 }),
    defaultValue: 0
  })
  declare paymentStatusSponsor: number

  @Column({
    type: DataType.TINYINT({ length: 1 }),
    defaultValue: 0
  })
  declare paymentStatusProvider: number

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

  @Column({
    type: DataType.INTEGER({ length: 11 }),
    defaultValue: null,
    references: {
      model: Sponsor,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  })
  @ForeignKey(() => Sponsor)
  declare sponsorId: number
}
