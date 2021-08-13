'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.addColumn({
      tableName: "insurance_price",
    }, "gender", { //ชื่อ column
      allowNull: true,
      type: Sequelize.SMALLINT(),
      comment: "0 = ทั้งหมด 1 = ชาย 2 = หญิง"
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
