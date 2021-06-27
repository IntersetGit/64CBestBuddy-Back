'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable("mas_plan", {
      id: {
        type: Sequelize.STRING(100),
        allowNull: false,
        primaryKey: true,
        comment: "รหัสหลักแผนประกัน"
      },
      insurance_id: {
        type: Sequelize.STRING(100),
        allowNull: true,
        references: {
          model: 'insurance',
          key: 'id' 
        },
        comment: "รหัสประกัน"
      },
      name: {
        type: Sequelize.STRING(100),
        allowNull: true,
        comment: "ชื่อแผน เช่น s, m, l"
      },
      sort: {
        type: Sequelize.SMALLINT(3),
        allowNull: true,
        comment: "เรียงลำดับ"
      }
    }, {
      comment: "ตารางแผนประกัน"
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
