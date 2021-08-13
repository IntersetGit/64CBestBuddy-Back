'use strict';
const sub_district = require('../data/mas_sub_district');
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert({
      tableName: 'mas_sub_district'
    }, sub_district);
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
