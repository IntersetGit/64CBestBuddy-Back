'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable("mas_protection", {
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
      details: {
        type: Sequelize.TEXT(),
        allowNull: true,
        comment: "รายละเอียดความคุ้มครอง"
      },
      sort: {
        type: Sequelize.SMALLINT(3),
        allowNull: true,
        comment: "เรียงลำดับ"
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
