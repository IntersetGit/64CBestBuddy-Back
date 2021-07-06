'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    const data = [
      {
        id: "d984acb8-fd6c-45eb-9d93-af08840008de",
        name: "ราย 2 เดือน",
        sort: 2
      },
      {
        id: "371ebb69-d0f7-4b8f-8ff7-b699f30939cf",
        name: "ราย 4 เดือน",
        sort: 4
      },
    ]
    return await queryInterface.bulkInsert({
      tableName: 'mas_installment'
    }, data);
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
