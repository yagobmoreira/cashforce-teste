import { CreationOptional, type Optional } from 'sequelize'
import { AutoIncrement, Column, DataType, Model, PrimaryKey, Table, Unique } from 'sequelize-typescript'
import { type IUser } from 'src/interfaces/users/IUser'

interface UserCreationAttributes extends Optional<IUser, 'id'> {}

@Table({
  tableName: 'users',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  modelName: 'users'
})
export default class User extends Model<IUser, UserCreationAttributes> {
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
  declare name: string

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  @Unique
  declare email: string

  @Column({
    type: DataType.STRING,
    defaultValue: null
  })
  declare phoneNumber: string

  @Column({
    type: DataType.STRING,
    defaultValue: null
  })
  declare mobile: string

  @Column({
    type: DataType.STRING,
    defaultValue: null
  })
  declare departament: string

  @Column({
    type: DataType.STRING,
    defaultValue: null
  })
  declare verificationCode: string

  @Column({
    type: DataType.TINYINT({ length: 1 }),
    defaultValue: 0
  })
  declare emailChecked: number

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
    type: DataType.TINYINT({ length: 1 }),
    defaultValue: 0
  })
  declare cashforceAdm: number
}
