'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("mas_address_sub_district", {
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      sub_district_id: {
        type: Sequelize.STRING(255),
        allowNull: false,
        comment: "รหัสหลักตำบล"
      },
      district_id: {
        type: Sequelize.STRING(255),
        allowNull: false,
        comment: "ไอดี อำเภอ/เขต",
      },
      sub_district_name_en: {
        type: Sequelize.STRING(255),
        allowNull: false,
        comment: "ชื้อตาราง ตำบล/แขวง ภาษาอังกฤษ"
      },
      sub_district_name_th: {
        type: Sequelize.STRING(255),
        allowNull: false,
        comment: "ชื้อตาราง ตำบล/แขวง ภาษาไทย"
      },
      postal_code: {
        type: Sequelize.STRING(20),
        allowNull: false,
        comment: "รหัสไปรษณีย์"
      },
      code_cigna: {
        type: Sequelize.STRING(255),
        allowNull: true,
        comment: "รหัส ของ cigna"
      },
      code_falcon: {
        type: Sequelize.STRING(255),
        allowNull: true,
        comment: "รหัส ของ falcon"
      },
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable({
      tableName: "mas_address_sub_district",
    })
  }
};
