import { Sequelize } from 'sequelize-typescript'
import * as config from '../config/database'

const sequelize = new Sequelize(config)

export default sequelize
