'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable("sysm_roles", {
      id: {
        type: Sequelize.STRING(100),
        allowNull: false,
        primaryKey: true,
        comment: "รหัสหลักสิทธิ์เข้าใช้งานระบบ"
      },
      roles_name: {
        type: Sequelize.STRING(100),
        allowNull: false,
        comment: "ชื่อสิทธิ์"
      },
      sort:{
        type: Sequelize.SMALLINT(),
        allowNull: true,
        comment: "เรียงลำดับ"
      },
    }, {
      comment: "ตารางสิทธิ์เข้าใช้งานระบบ"
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
