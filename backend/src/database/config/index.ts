import { Sequelize } from 'sequelize-typescript'
// import * as config from '../config/database'
import path from 'path'

const sequelize = new Sequelize({
  database: 'cashforce_v3',
  dialect: 'mysql',
  username: 'root',
  password: 'my-secret',
  host: 'localhost',
  port: 3306,
  logging: false,
  models: [path.resolve(path.join(__dirname, 'models'))],
  modelMatch: (filename, member) => {
    return filename.substring(0, filename.indexOf('.model')) === member.toLowerCase()
  }
})

export default sequelize
