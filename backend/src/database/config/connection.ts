import { Sequelize } from 'sequelize-typescript'
import path from 'path'

const sequelize = new Sequelize({
  username: 'root',
  password: 'my-secret',
  database: 'cashforce_v3',
  host: 'localhost',
  port: 3306,
  dialect: 'mysql',
  logging: true,
  models: [path.join(__dirname, '..', 'models')]
})

export default sequelize
