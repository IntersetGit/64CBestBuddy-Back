'use strict';
const mas_insurance_type = require('../data/mas_insurance_type');
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert({
      tableName: 'mas_insurance_type'
    }, mas_insurance_type);
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
