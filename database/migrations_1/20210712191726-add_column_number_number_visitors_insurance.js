'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.addColumn({
      tableName: "insurance",
    }, "number_visitors", {
      allowNull: true,
      type: Sequelize.INTEGER(),
      comment: "จำนวนผู้เข้าชม",
      defaultValue: false
    })
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
