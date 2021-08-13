'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("mas_address_district", {
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      district_id: {
        type: Sequelize.STRING(255),
        allowNull: false,
        comment: "รหัสหลักอำเภอ"
      },
      provicne_id: {
        type: Sequelize.STRING(255),
        allowNull: false,
        comment: "รหัสจังหวัด",
      },
      district_name_en: {
        type: Sequelize.STRING(255),
        allowNull: false,
        comment: "ชื้ออำเภอ/เขต ภาษาอังกฤษ"
      },
      district_name_th: {
        type: Sequelize.STRING(255),
        allowNull: false,
        comment: "ชื้ออำเภอ/เขต ภาษาไทย"
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
      tableName: "mas_address_district",
    })
  }
};
