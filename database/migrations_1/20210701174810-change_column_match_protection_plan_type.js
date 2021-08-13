'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.changeColumn({
      tableName: "match_protection_plan",
    }, "value", { //ชื่อ column
      type: Sequelize.STRING(100),
      allowNull: true,
      comment: "ราคาความคุ้มครอง"
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
