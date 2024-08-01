import { Column, DataType, Model, Table, Unique } from 'sequelize-typescript'
import { type ICnpj } from 'src/interfaces/cnpjs/ICnpj'

@Table({
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  tableName: 'cnpjs',
  modelName: 'Cnpj'
})
export default class Cnpj extends Model<ICnpj> {
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
  declare cnpj: string

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  declare companyType: string

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
}