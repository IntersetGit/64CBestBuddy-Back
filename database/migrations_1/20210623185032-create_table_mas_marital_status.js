'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("mas_marital_status", {
      id: {
        type: Sequelize.INTEGER(100),
        allowNull: false,
        primaryKey: true
      },
      codename: {
        type: Sequelize.STRING(100),
        allowNull: false,
      }
    }, {
      comment: "ตารางสถานภาพการสมรส"
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable({
      tableName: "mas_marital_status",
    })
  }
};
