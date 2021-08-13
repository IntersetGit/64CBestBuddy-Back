'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("mas_prefix", {
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      prefix_id: {
        type: Sequelize.STRING(255),
        allowNull: false,
        comment: "รหัสหลักคำนำหน้าชื่อ"
      },
      name: {
        type: Sequelize.STRING(255),
        allowNull: false,
        comment: "คำนำหน้าชื่อ",
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
      tableName: "mas_prefix",
    })
  }
};
