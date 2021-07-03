'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.addColumn({
      tableName: "mas_age_range",
    }, "sort", { //ชื่อ column
      allowNull: true,
      type: Sequelize.SMALLINT(),
      comment: "เรียงลำดับ"
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
