'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable("insurance_applicant", {
      id: {
        type: Sequelize.STRING(100),
        allowNull: false,
        primaryKey: true,
        comment: "รหัสผู้ขอประกัน"
      },
      insurance_id: {
        type: Sequelize.STRING(100),
        allowNull: false,
        references: {
          model: 'insurance',
          key: 'id' 
        },
        comment: "รหัสตารางประกัน"
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
      mas_marital_status_id: {
        type: Sequelize.INTEGER(),
        allowNull: true,
        references: {
          model: 'mas_marital_status',
          key: 'id' 
        },
        comment: "รหัสสถานภาพ"
      },
      mas_occupation_id: {
        type: Sequelize.INTEGER(),
        allowNull: true,
        references: {
          model: 'mas_occupation',
          key: 'id' 
        },
        comment: "รหัสอาชีพ"
      },
      id_number: {
        type: Sequelize.STRING(100),
        allowNull: true,
        comment: "เลขประชาชน"
      },
      first_name: {
        type: Sequelize.STRING(100),
        allowNull: true,
        comment: "ชื่อจริง"
      },
      last_name: {
        type: Sequelize.STRING(100),
        allowNull: true,
        comment: "นามสกุล"
      },
      birthday: {
        type: Sequelize.TIME(),
        allowNull: true,
        comment: "ปีเกิด"
      },
      age: {
        type: Sequelize.SMALLINT(3),
        allowNull: true,
        comment: "อายุ"
      },
      hight: {
        type: Sequelize.SMALLINT(3),
        allowNull: true,
        comment: "ส่วนสูง"
      },
      weight: {
        type: Sequelize.SMALLINT(3),
        allowNull: true,
        comment: "น้ำหนัก"
      },
      address: {
        type: Sequelize.TEXT(),
        allowNull: true,
        comment: "ที่อยู่"
      },
      additional_address: {
        type: Sequelize.TEXT(),
        allowNull: true,
        comment: "ที่อยู่เพิ่มเติม"
      },
      nationality: {
        type: Sequelize.STRING(100),
        allowNull: true,
        comment: "สัญชาติ"
      },
      email: {
        type: Sequelize.STRING(100),
        allowNull: true,
        comment: "email"
      },
      phone: {
        type: Sequelize.STRING(100),
        allowNull: true,
        comment: "เบอร์โทรติดต่อ"
      },
      mas_province_id: {
        type: Sequelize.STRING(100),
        allowNull: true,
        references: {
          model: 'mas_province',
          key: 'id' 
        },
        comment: "รหัสจังหวัด"
      },
      mas_district_id: {
        type: Sequelize.STRING(100),
        allowNull: true,
        references: {
          model: 'mas_district',
          key: 'id' 
        },
        comment: "รหัสอำเภอ"
      },
      mas_sub_district_id: {
        type: Sequelize.STRING(100),
        allowNull: true,
        references: {
          model: 'mas_sub_district',
          key: 'id' 
        },
        comment: "รหัสตำบล"
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
    }, {
      comment: "ตารางผู้ขอประกัน"
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
