'use strict';
const data = require('../data/mas_prefix_falcon')

module.exports = {
  up: async (queryInterface, Sequelize) => {

    return await queryInterface.bulkInsert({tableName: 'mas_prefix'}, data);
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
