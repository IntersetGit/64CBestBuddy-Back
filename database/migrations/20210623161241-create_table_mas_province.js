'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("mas_province", {
      id: {
        type: Sequelize.STRING(11),
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING(40),
        allowNull: false,
      }
    }, {
      comment: "ตารางจังหวัด"
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable({
      tableName: "mas_province",
    })
  }
};
