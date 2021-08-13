'use strict';
const mas_ref_policy_rel = require('../data/mas_ref_policy_rel');
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert({
      tableName: 'mas_ref_policy_rel'
    }, mas_ref_policy_rel);
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
