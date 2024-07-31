import { type Options } from 'sequelize'

const config: Options = {
  database: 'cashforce_v3',
  dialect: 'mysql',
  username: 'root',
  password: 'my-secret',
  host: 'localhost',
  port: 3306,
  logging: false
}

export = config
