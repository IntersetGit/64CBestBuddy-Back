'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("mas_address_province", {
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      add_id: {
        type: Sequelize.STRING(255),
        allowNull: true,
        comment: "รหัสหลักจังหวัด"
      },
      provicne_code: {
        type: Sequelize.STRING(255),
        allowNull: true,
        comment: "ชื้อจังหวัด ภาษาไทย"
      },
      provicne_name_en: {
        type: Sequelize.STRING(255),
        allowNull: false,
        comment: "ชื้อจังหวัด ภาษาอังกฤษ"
      },
      provicne_name_th: {
        type: Sequelize.STRING(255),
        allowNull: false,
        comment: "โค้ดจังหวัด"
      },
      code_cigna: {
        type: Sequelize.STRING(255),
        allowNull: false,
        comment: "รหัส ของ cigna"
      },
      code_falcon: {
        type: Sequelize.STRING(255),
        allowNull: false,
        comment: "รหัส ของ falcon"
      },
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable({
      tableName: "mas_address_province",
    })
  }
};
