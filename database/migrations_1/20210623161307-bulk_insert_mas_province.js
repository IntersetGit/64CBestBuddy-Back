'use strict';
const province = require('../data/mas_province');
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert({
      tableName: 'mas_province'
    }, province);
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
