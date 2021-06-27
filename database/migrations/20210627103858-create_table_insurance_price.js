'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable("insurance_price", {
      id: {
        type: Sequelize.STRING(100),
        allowNull: false,
        primaryKey: true,
        comment: "รหัสหลักแต่ละช่วงอายุ"
      },
      insurance_id: {
        type: Sequelize.STRING(100),
        allowNull: true,
        comment: "ช่วงอายุเริ่มต้น"
      },
      mas_installment_id: {
        type: Sequelize.TEXT(),
        allowNull: true,
        comment: "ช่วงอายุสุดท้าย"
      },
      mas_age_range_id: {
        type: Sequelize.TEXT(),
        allowNull: true,
        comment: "เรียงลำดับข้อมูล"
      },
      price_normal: {
        type: Sequelize.TEXT(),
        allowNull: true,
        comment: "เรียงลำดับข้อมูล"
      },
      price_sale: {
        type: Sequelize.TEXT(),
        allowNull: true,
        comment: "เรียงลำดับข้อมูล"
      },
    }, {
      comment: "ตารางช่วงอายุ"
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
