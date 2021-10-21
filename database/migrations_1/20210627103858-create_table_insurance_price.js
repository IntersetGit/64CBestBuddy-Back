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
        type: Sequelize.STRING(100),
        allowNull: true,
        references: {
          model: 'mas_installment',
          key: 'id' 
        },
        comment: "รหัสแต่ละงวด"
      },
      mas_age_range_id: {
        type: Sequelize.STRING(100),
        allowNull: true,
        references: {
          model: 'mas_age_range',
          key: 'id' 
        },
        comment: "รหัสช่วงอายุ"
      },
      price_normal: {
        type: Sequelize.BIGINT(11),
        allowNull: true,
        comment: "ราคาปกติ"
      },
      price_sale: {
        type: Sequelize.BIGINT(11),
        allowNull: true,
        comment: "ราคาที่ลด"
      },
    }, {
      comment: "ตารางราคาประกัน"
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable({
      tableName: "insurance_price",
    })
  }
};
