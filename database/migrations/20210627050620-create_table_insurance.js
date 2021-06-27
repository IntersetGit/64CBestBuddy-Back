'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable("insurance", {
      id: {
        type: Sequelize.STRING(100),
        allowNull: false,
        primaryKey: true
      },
      product_code: {
        type: Sequelize.STRING(100),
        allowNull: true,
        unique: true,
        comment: "รหัสโค้ดประกัน"
      },
      name: {
        type: Sequelize.STRING(100),
        allowNull: true,
        comment: "ชื่อประกัน"
      },
      img_header: {
        type: Sequelize.JSON(),
        allowNull: true,
        comment: "ภาพหัว"
      },
      img_cover: {
        type: Sequelize.JSON(),
        allowNull: true,
        comment: "ภาพปก"
      },
      details: {
        type: Sequelize.STRING(100),
        allowNull: true,
        comment: "รายละเอียด ui"
      },
      note: {
        type: Sequelize.STRING(100),
        allowNull: true,
        comment: "หมายเหตุ"
      },
      status: {
        type: Sequelize.BOOLEAN(),
        allowNull: true,
        comment: "true = ลด false = ไม่ลด"
      },
      percentage: {
        type: Sequelize.INTEGER(100),
        allowNull: true,
        comment: "เปอร์เซ็นที่ลดราคา"
      },
      isuse: {
        type: Sequelize.SMALLINT(1),
        allowNull: true,
        comment: "สถานะใช้ข้อมูล"
      },
      sort: {
        type: Sequelize.SMALLINT(3),
        allowNull: true,
        comment: "เรียงลำดับ"
      },
    }, {
      comment: "ตารางประกัน"
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
