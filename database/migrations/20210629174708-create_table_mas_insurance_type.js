'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable("mas_insurance_type", {
      id: {
        type: Sequelize.STRING(100),
        allowNull: false,
        primaryKey: true,
        comment: "รหัสหลักประเภทประกัน"
      },
      name:{
        type: Sequelize.STRING(100),
        allowNull: true,
        comment: "ชื่อประเภทประกัน"
      },
      isuse: {
        type: Sequelize.SMALLINT(),
        allowNull: true,
        comment: "การใช้งานข้อมูล 0 = ไม่ใช้งาน 1 = ใช้งาน"
      },
      sort:{
        type: Sequelize.SMALLINT(),
        allowNull: true,
        comment: "เรียงลำดับ"
      },
    }, {
      comment: "ตารางประเภทประกัน"
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable({
      tableName: "mas_insurance_type",
    })
  }
};
