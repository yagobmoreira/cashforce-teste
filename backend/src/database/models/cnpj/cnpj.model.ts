import { CreationOptional, type Optional } from 'sequelize'
import { AutoIncrement, Column, DataType, Model, PrimaryKey, Table } from 'sequelize-typescript'
import { type ICnpj } from 'src/interfaces/cnpjs/ICnpj'

interface CnpjCreationAttributes extends Optional<ICnpj, 'id'> {}

@Table({
  tableName: 'cnpjs',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  modelName: 'cnpjs'
})
export default class Cnpj extends Model<ICnpj, CnpjCreationAttributes> {
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
