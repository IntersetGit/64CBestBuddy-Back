'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const data = [
      {
        id: "63225e9a-26e7-44cc-abfc-c46300872c19",
        age_range: "6-9",
        age_start: "6",
        age_end: "9",
        note: null,
        sort: null,
      },
      {
        id: "2d2ce058-4cef-4068-ad87-686745f6dd55",
        age_range: "10-19",
        age_start: "10",
        age_end: "9",
        note: null,
        sort: null,
      },
      {
        id: "f8db2df6-a1e3-4a30-a493-781761e836ef",
        age_range: "20-39",
        age_start: "20",
        age_end: "39",
        note: null,
        sort: null,
      },
      {
        id: "31abebea-f9a8-45f3-9478-b29031bd9d4a",
        age_range: "66-70",
        age_start: "66",
        age_end: "70",
        note: null,
        sort: null,
      },
      {
        id: "2ff9630a-2f5f-4520-927a-55b25a29e6ad",
        age_range: "71-80",
        age_start: "71",
        age_end: "80",
        note: "ต่ออายุ",
        sort: null,
      },
    ]
    return await queryInterface.bulkInsert({
      tableName: 'mas_age_range'
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
