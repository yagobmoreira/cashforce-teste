import { type Options } from 'sequelize'

const config: Options = {
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'my-secret',
  database: process.env.DB_NAME || 'cashforce_v3',
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 3306,
  dialect: 'mysql',
  logging: false
}

export = config
