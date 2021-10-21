'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable("mas_age_range", {
      id: {
        type: Sequelize.STRING(100),
        allowNull: false,
        primaryKey: true,
        comment: "รหัสหลักแต่ละช่วงอายุ"
      },
      age_range: {
        type: Sequelize.STRING(100),
        allowNull: true,
        comment: "ช่วงอายุเริ่มต้น"
      },
      age_start: {
        type: Sequelize.TEXT(),
        allowNull: true,
        comment: "ช่วงอายุสุดท้าย"
      },
      age_end: {
        type: Sequelize.TEXT(),
        allowNull: true,
        comment: "เรียงลำดับข้อมูล"
      },
    }, {
      comment: "ตารางช่วงอายุ"
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable({
      tableName: "mas_age_range",
    })
  }
};
