'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.addColumn({
      tableName: "insurance",
    }, "haed_highlight", { //ชื่อ column
      allowNull: true,
      type: Sequelize.JSON(),
      comment: "ไอคอน 3 ตัว"
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
