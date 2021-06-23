'use strict';
const mas_occupation = require('../data/mas_occupation');
module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    return await queryInterface.bulkInsert({
      tableName: 'mas_occupation'
    }, mas_occupation);
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
