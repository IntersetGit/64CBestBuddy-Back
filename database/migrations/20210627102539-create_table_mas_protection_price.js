'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable("mas_protection_price", {
      id: {
        type: Sequelize.STRING(100),
        allowNull: false,
        primaryKey: true,
        comment: "รหัสหลักราคาความคุ้มครอง"
      },
      mas_plan_id: {
        type: Sequelize.STRING(100),
        allowNull: true,
        references: {
          model: 'mas_plan',
          key: 'id' 
        },
        comment: "รหัสแผนประกัน"
      },
      mas_protection_id: {
        type: Sequelize.TEXT(),
        allowNull: true,
        references: {
          model: 'mas_protection',
          key: 'id' 
        },
        comment: "รหัสความคุ้มครอง"
      },
      value: {
        type: Sequelize.BIGINT(100),
        allowNull: true,
        comment: "ราคาความคุ้มครอง"
      }
    }, {
      comment: "ตารางความคุ้มครอง"
    })
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
