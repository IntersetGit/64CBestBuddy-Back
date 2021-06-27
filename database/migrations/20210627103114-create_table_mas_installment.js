'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable("mas_installment", {
      id: {
        type: Sequelize.STRING(100),
        allowNull: false,
        primaryKey: true,
        comment: "รหัสหลักชำระเบี้ยงวดประกัน"
      },
      name: {
        type: Sequelize.STRING(100),
        allowNull: true,
        comment: "ชื่อเบี้ยงวดประกัน"
      },
      sort: {
        type: Sequelize.TEXT(),
        allowNull: true,
        comment: "เรียงลำดับข้อมูล"
      },
    }, {
      comment: "ตารางชำระเบี้ยงวดประกัน"
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
