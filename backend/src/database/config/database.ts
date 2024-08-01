import { type Options } from 'sequelize'

const config: Options = {
  username: 'root',
  password: 'my-secret',
  database: 'cashforce_v3',
  host: 'localhost',
  port: 3306,
  dialect: 'mysql',
  dialectOptions: {
    timezone: 'Z'
  },
  logging: true
}

export = config
