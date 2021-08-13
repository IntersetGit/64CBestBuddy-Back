'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable("sysm_users", {
      id: {
        type: Sequelize.STRING(100),
        allowNull: false,
        primaryKey: true,
        comment: "รหัสหลักผู้ใช้งานระบบ"
      },
      roles_id: {
        type: Sequelize.STRING(100),
        allowNull: false,
        references: {
          model: 'sysm_roles',
          key: 'id' 
        },
        comment: "รหัสสิทธิ์ผู้ใช้งาน"
      },
      username: {
        type: Sequelize.STRING(100),
        allowNull: false,
        comment: "ชื่อผู้ใช้งาน"
      },
      password: {
        type: Sequelize.STRING(100),
        allowNull: false,
        comment: "รหัสผ่าน"
      },
      email:{
        type: Sequelize.STRING(100),
        allowNull: true,
        comment: "อีเมล"
      },
      isuse:{
        type: Sequelize.SMALLINT(),
        allowNull: false,
        comment: "สถานะ : 0 = ยกเลิก , 1 = ใช้งาน"
      },
      created_by:{
        type: Sequelize.STRING(100),
        allowNull: true,
        comment: "สร้างข้อมูลโดย"
      },
      created_date:{
        type: Sequelize.DATE(),
        allowNull: true,
        comment: "สร้างข้อมูลวันที่"
      },
      updated_by:{
        type: Sequelize.STRING(100),
        allowNull: true,
        comment: "แก้ไขข้อมูลโดย"
      },
      updated_date:{
        type: Sequelize.DATE(),
        allowNull: true,
        comment: "แก้ไขข้อมูลวันที่"
      },
    }, {
      comment: "ตารางผู้ใช้งานระบบ"
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
