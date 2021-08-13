module.exports = {

  up: async (queryInterface, Sequelize) => {
    return await queryInterface.addColumn({
      tableName: "insurance_price",
    }, "is_show_price", {
      allowNull: true,
      type: Sequelize.BOOLEAN(),
      comment: "โชว์ราคา",
      defaultValue: false
    })
  },

  down: async (queryInterface, Sequelize) => {

  }
};
