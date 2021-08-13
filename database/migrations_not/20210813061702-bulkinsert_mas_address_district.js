'use strict';
const data = require('../data/mas_district_falcon')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert({tableName: 'mas_address_district'}, data);
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
