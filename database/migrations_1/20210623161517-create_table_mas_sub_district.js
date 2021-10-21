'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("mas_sub_district", {
      id: {
        type: Sequelize.STRING(100),
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING(40),
        allowNull: false,
      },
      district_id: {
        type: Sequelize.STRING(11),
        allowNull: false,
        references: {
          model: 'mas_district',
          key: 'id' 
        }
      },
      post_code: {
        type: Sequelize.INTEGER(6),
        allowNull: false,
      }
    }, {
      comment: "ตารางตำบล"
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable({
      tableName: "mas_sub_district",
    })
  }
};
