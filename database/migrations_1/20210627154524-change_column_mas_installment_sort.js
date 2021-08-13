'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.changeColumn({
      tableName: "mas_installment",
    }, "sort", { //ชื่อ column
      allowNull: true,
      type: Sequelize.SMALLINT(),
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
