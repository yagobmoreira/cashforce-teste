import { type QueryInterface } from 'sequelize'

export default {
  async up (queryInterface: QueryInterface) {
    await queryInterface.sequelize.query('ALTER TABLE `sponsors` MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;')
  },

  async down (queryInterface: QueryInterface) {
    await queryInterface.sequelize.query('ALTER TABLE `sponsors` MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;')
  }
}
