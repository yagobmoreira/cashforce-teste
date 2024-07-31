import { AutoIncrement, Column, DataType, Model, PrimaryKey, Table } from 'sequelize-typescript'
import { type CreationOptional, type Optional } from 'sequelize'
import { type IBuyer } from 'src/interfaces/buyers/IBuyer'

interface BuyerCreationAttributes extends Optional<IBuyer, 'id'> {}

@Table({
  tableName: 'buyers',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  modelName: 'buyers'
})
export default class Buyer extends Model<IBuyer, BuyerCreationAttributes> {
  @AutoIncrement
  @PrimaryKey
  @Column({
    type: DataType.INTEGER('11')
  })
  declare id: CreationOptional<number>

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  declare name: string

  @Column({
    type: DataType.STRING,
    defaultValue: null
  })
  declare tradingName: string

  @Column({
    type: DataType.STRING,
    defaultValue: null
  })
  declare cashforceTax: string

  @Column({
    type: DataType.STRING,
    defaultValue: null
  })
  declare responsibleName: string

  @Column({
    type: DataType.STRING,
    defaultValue: null
  })
  declare responsibleEmail: string

  @Column({
    type: DataType.STRING,
    defaultValue: null
  })
  declare responsiblePosition: string

  @Column({
    type: DataType.STRING,
    defaultValue: null
  })
  declare responsiblePhone: string

  @Column({
    type: DataType.STRING,
    defaultValue: null
  })
  declare responsibleMobile: string

  @Column({
    type: DataType.STRING,
    defaultValue: null
  })
  declare website: string

  @Column({
    type: DataType.STRING,
    defaultValue: null
  })
  declare postalCode: string

  @Column({
    type: DataType.STRING,
    defaultValue: null
  })
  declare address: string

  @Column({
    type: DataType.STRING,
    defaultValue: null
  })
  declare number: string

  @Column({
    type: DataType.STRING,
    defaultValue: null
  })
  declare complement: string

  @Column({
    type: DataType.STRING,
    defaultValue: null
  })
  declare neighborhood: string

  @Column({
    type: DataType.STRING,
    defaultValue: null
  })
  declare city: string

  @Column({
    type: DataType.STRING,
    defaultValue: null
  })
  declare state: string

  @Column({
    type: DataType.STRING,
    defaultValue: null
  })
  declare phoneNumber: string

  @Column({
    type: DataType.STRING,
    defaultValue: null
  })
  declare situation: string

  @Column({
    type: DataType.STRING,
    defaultValue: null
  })
  declare situationDate: string

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
    type: DataType.TINYINT('11'),
    defaultValue: 1
  })
  declare confirm: number

  @Column({
    type: DataType.STRING,
    defaultValue: null
  })
  declare email: string
}
