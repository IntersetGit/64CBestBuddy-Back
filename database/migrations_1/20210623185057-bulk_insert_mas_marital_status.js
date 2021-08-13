'use strict';
const MaritalStatus = require('../data/mas_marital_status');
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert({
      tableName: 'mas_marital_status'
    }, MaritalStatus);
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
