'use strict';

const data = [
  {
    id: "2948471c-f047-4acc-8ab8-69f68f9ebdba",
    age_range: "ทั้งหมด",
    age_start: "0",
    age_end: "999",
    note: "ทั้งหมด",
    sort: "0",
  },
  {
    id: "315798fd-56a0-4642-8a95-577da0bf2e6d",
    age_range: "6-19",
    age_start: "6",
    age_end: "19",
    note: "แผนเด็ก",
    sort: "1",
  },
  {
    id: "3df515fb-727f-4462-89f2-cf579eaf24b2",
    age_range: "20-35",
    age_start: "20",
    age_end: "35",
    note: "",
    sort: "3",
  },
  {
    id: "9aa8f0f0-0b92-4b15-aed3-c116c1e68bbb",
    age_range: "56-59",
    age_start: "56",
    age_end: "59",
    note: "(Renewal only)",
    sort: "10",
  },
  
]

module.exports = {


  up: async (queryInterface, Sequelize) => {
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
