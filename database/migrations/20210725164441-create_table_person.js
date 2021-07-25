'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable("person", {
      id: {
        type: Sequelize.STRING(100),
        allowNull: false,
        primaryKey: true,
        comment: "รหัสหลักข้อมูลส่วนบุคคล"
      },
      user_id: {
        type: Sequelize.STRING(100),
        allowNull: false,
        references: {
          model: 'sysm_users',
          key: 'id' 
        },
        comment: "รหัสคำนำหน้าชื่อ"
      },
      mas_title_name_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        references: {
          model: 'mas_title_name',
          key: 'id' 
        },
        comment: "รหัสคำนำหน้าชื่อ"
      },
      first_name_th:{
        type: Sequelize.STRING(100),
        allowNull: false,
        comment: "ชื่อจริง (ไทย)"
      },
      first_name_en:{
        type: Sequelize.STRING(100),
        allowNull: true,
        comment: "ชื่อจริง (อังกฤษ)"
      },
      last_name_th:{
        type: Sequelize.STRING(100),
        allowNull: false,
        comment: "นามสกุล (ไทย)"
      },
      last_name_en:{
        type: Sequelize.STRING(100),
        allowNull: true,
        comment: "นามสกุล (อังกฤษ)"
      },
      nick_name_th:{
        type: Sequelize.STRING(100),
        allowNull: true,
        comment: "ชื่อเล่น (ไทย)"
      },
      nick_name_en:{
        type: Sequelize.STRING(100),
        allowNull: true,
        comment: "ชื่อเล่น (อังกฤษ)"
      },
      gender:{
        type: Sequelize.SMALLINT(),
        allowNull: true,
        comment: "เพศ : 1 = ชาย , 2 = หญิง , null = ไม่ระบุ"
      },
      birthday:{
        type: Sequelize.DATEONLY(),
        allowNull: true,
        comment: "วันเกิด"
      },
      id_card:{
        type: Sequelize.STRING(100),
        allowNull: true,
        comment: "เลขบัตรประชาชน"
      },
      passport_number:{
        type: Sequelize.STRING(100),
        allowNull: true,
        comment: "เลขหนังสือเดินทาง"
      },
      insurance_code:{
        type: Sequelize.STRING(100),
        allowNull: true,
        comment: "รหัสตัวแทนประกัน"
      },
      created_by:{
        type: Sequelize.STRING(100),
        allowNull: false,
        references: {
          model: 'sysm_users',
          key: 'id' 
        },
        comment: "สร้างข้อมูลโดย"
      },
      created_date:{
        type: Sequelize.DATE(),
        allowNull: false,
        comment: "สร้างข้อมูลวันที่"
      },
      updated_by:{
        type: Sequelize.STRING(100),
        allowNull: true,
        references: {
          model: 'sysm_users',
          key: 'id' 
        },
        comment: "แก้ไขข้อมูลโดย"
      },
      updated_date:{
        type: Sequelize.DATE(),
        allowNull: true,
        comment: "แก้ไขข้อมูลวันที่"
      },
    }, {
      comment: "ตารางข้อมูลส่วนบุคคล"
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
