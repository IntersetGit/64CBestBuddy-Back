'use strict';
const mas_title_name = require('../data/mas_title_name');
module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    const data = mas_title_name;
    return await queryInterface.bulkInsert({tableName: 'mas_title_name'}, data, {});

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
