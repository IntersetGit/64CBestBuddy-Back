'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("mas_occupation", {
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        primaryKey: true
      },
      occupation_name: {
        type: Sequelize.STRING(100),
        allowNull: false,
      }
    }, {
      comment: "ตารางอาชีพ"
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable({
      tableName: "mas_occupation",
    })
  }
};
