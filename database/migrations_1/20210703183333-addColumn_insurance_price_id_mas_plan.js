'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.addColumn({
      tableName: "insurance_price",
    }, "mas_plan_id", { //ชื่อ column
      allowNull: true,
      type: Sequelize.STRING(100),
      comment: "รหัสแผนประกัน S, M, L"
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
