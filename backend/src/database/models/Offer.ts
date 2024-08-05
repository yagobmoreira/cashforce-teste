import { AutoIncrement, BelongsTo, Column, DataType, ForeignKey, Model, PrimaryKey, Table } from 'sequelize-typescript'
import { type CreationOptional, type Optional } from 'sequelize'
import { type IOffer } from 'interfaces/offers/IOffer'
import Order from './Order'
import Sponsor from './Sponsor'

interface OfferCreationAttributes extends Optional<IOffer, 'id'> {}

@Table({
  tableName: 'offers',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  modelName: 'Offer'
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

  @ForeignKey(() => Order)
  @Column({
    type: DataType.INTEGER({ length: 11 }),
    defaultValue: null,
    references: {
      model: 'orders',
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  })
  declare orderId: number

  @ForeignKey(() => Sponsor)
  @Column({
    type: DataType.INTEGER({ length: 11 }),
    defaultValue: null,
    references: {
      model: 'sponsors',
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  })
  declare sponsorId: number

  @BelongsTo(() => Order)
  declare order: Order

  @BelongsTo(() => Sponsor)
  declare sponsor: Sponsor
}
