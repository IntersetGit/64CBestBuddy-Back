'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let data = {
      table1: await queryInterface.renameTable('mas_plan', 'insurance_mas_plan'),
      table2: await queryInterface.renameTable('mas_protection', 'insurance_mas_protection'),
      table3: await queryInterface.renameTable('mas_protection_price', 'match_protection_plan')
    }
    return data
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
