'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.addColumn({
      tableName: "insurance",
    }, "is_one_price", { //ชื่อ column
      allowNull: true,
      type: Sequelize.BOOLEAN(),
      comment: "เช็คการส่ง true = gender 0 false = gender 1 or 2"
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
