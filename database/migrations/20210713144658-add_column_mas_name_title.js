'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.addColumn({
      tableName: "mas_title_name",
    }, "isuse", {
      allowNull: true,
      type: Sequelize.SMALLINT(),
      comment: "สถานะใช้งานข้อมูล 0 = ไม่ใช้งาน 1 = ใช้งาน"
    }, "sort", {
      allowNull: true,
      type: Sequelize.SMALLINT(),
      comment: "เรียงลำดับข้อมูล"
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
