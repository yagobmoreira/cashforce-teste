import { ICnpj } from 'interfaces/cnpjs/ICnpj'
import { Optional } from 'sequelize'
import { Column, DataType, Model, Table, Unique } from 'sequelize-typescript'

interface CnpjCreationAttributes extends Optional<ICnpj, 'id'> {}
@Table({
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  tableName: 'cnpjs',
  modelName: 'Cnpj'
})
export default class Cnpj extends Model<ICnpj, CnpjCreationAttributes> {
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
