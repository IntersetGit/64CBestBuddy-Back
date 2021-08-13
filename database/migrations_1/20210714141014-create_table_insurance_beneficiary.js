'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable("insurance_beneficiary", {
      id: {
        type: Sequelize.STRING(100),
        allowNull: false,
        primaryKey: true,
        comment: "รหัสหลักผู้รับผลประโยนช์"
      },
      mas_title_name_id: {
        type: Sequelize.INTEGER(),
        allowNull: false,
        references: {
          model: 'mas_title_name',
          key: 'id' 
        },
        comment: "รหัสคำนำหน้าชื่อ"
      },
      mas_payer_relation_id: {
        type: Sequelize.STRING(100),
        allowNull: true,
        references: {
          model: 'mas_payer_relation',
          key: 'id' 
        },
        comment: "รหัสความสัมพันธ์กับผู้ขอเอาประกัน"
      },
      insurance_applicant_id:{
        type: Sequelize.STRING(100),
        allowNull: true,
        references: {
          model: 'insurance_applicant',
          key: 'id' 
        },
        comment: "รหัสผู้ขอประกัน"
      },
      first_name:{
        type: Sequelize.STRING(100),
        allowNull: true,
        comment: "ชื่อจริงผู้รับผลประโยชน์"
      },
      last_name:{
        type: Sequelize.STRING(100),
        allowNull: true,
        comment: "นามสกุลผู้รับผลประโยชน์"
      },
    }, {
      comment: "ตารางผู้รับผลประโยนช์"
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
