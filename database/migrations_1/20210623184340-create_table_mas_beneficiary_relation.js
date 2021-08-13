'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("mas_beneficiary_relation", {
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
      comment: "ตารางความสัมพันธ์ผู้รับผลประโยชน์"
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable({
      tableName: "mas_beneficiary_relation",
    })
  }
};
