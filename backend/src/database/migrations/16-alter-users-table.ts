import { type QueryInterface } from 'sequelize'

export default {
  async up (queryInterface: QueryInterface) {
    await queryInterface.sequelize.query('ALTER TABLE `users` MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=122;')
  },

  async down (queryInterface: QueryInterface) {
    await queryInterface.sequelize.query('ALTER TABLE `users` MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;')
  }
}
