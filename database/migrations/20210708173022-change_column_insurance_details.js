'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.changeColumn({
      tableName: "insurance",
    }, "details", { //ชื่อ column
      type: Sequelize.TEXT,
      allowNull: true,
      comment: "รายละเอียด ui"
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
