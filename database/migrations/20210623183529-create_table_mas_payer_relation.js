'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("mas_payer_relation", {
      id: {
        type: Sequelize.STRING(100),
        allowNull: false,
        primaryKey: true
      },
      codename: {
        type: Sequelize.STRING(100),
        allowNull: false,
      }
    }, {
      comment: "ตารางความสัมพันธ์กับผู้ชำระเงิน"
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable({
      tableName: "mas_payer_relation",
    })
  }
};
