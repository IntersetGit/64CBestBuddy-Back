'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("mas_district", {
      id: {
        type: Sequelize.STRING(100),
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING(40),
        allowNull: false,
      },
      province_id: {
        type: Sequelize.STRING(11),
        allowNull: false,
        references: {
          model: 'mas_province',
          key: 'id' 
        }
      }
    }, {
      comment: "ตารางอำเภอ"
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable({
      tableName: "mas_district",
    })
  }
};
