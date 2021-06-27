'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable("insurance_price", {
      id: {
        type: Sequelize.STRING(100),
        allowNull: false,
        primaryKey: true,
        comment: "รหัสหลักตารางราคา"
      },
      insurance_id: {
        type: Sequelize.STRING(100),
        allowNull: true,
        comment: "รหัสประกัน"
      },
      mas_installment_id: {
        type: Sequelize.TEXT(),
        allowNull: true,
        comment: "รหัสแต่ละงวด"
      },
      mas_age_range_id: {
        type: Sequelize.TEXT(),
        allowNull: true,
        comment: "รหัสช่วงอายุ"
      },
      price_normal: {
        type: Sequelize.TEXT(),
        allowNull: true,
        comment: "ราคาปกติ"
      },
      price_sale: {
        type: Sequelize.TEXT(),
        allowNull: true,
        comment: "ราคาที่ลด"
      },
    }, {
      comment: "ตารางราคาประกัน"
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
