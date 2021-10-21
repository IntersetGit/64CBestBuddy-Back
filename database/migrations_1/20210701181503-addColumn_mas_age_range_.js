'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.addColumn({
      tableName: "mas_age_range",
    }, "note", { //ชื่อ column
      allowNull: true,
      type: Sequelize.STRING(100),
      comment: "หมายเหตุ"
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
