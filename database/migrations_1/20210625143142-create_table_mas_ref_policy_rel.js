'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("mas_ref_policy_rel", {
      id: {
        type: Sequelize.STRING(100),
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING(100),
        allowNull: false,
      }
    }, {
      comment: "ตารางสถานภาพ"
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable({
      tableName: "mas_marital_status",
    })
  }
};
