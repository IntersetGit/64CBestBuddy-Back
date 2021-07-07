'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const data = [
      {
        id: "847f57f2-5524-4a49-84e8-9cd48c9876b7",
        age_range: "1-60",
        age_start: "1",
        age_end: "60",
        note: null,
        sort: null,
      },
      {
        id: "72051abb-accd-4721-bf75-b06061cf44d0",
        age_range: "61-70",
        age_start: "61",
        age_end: "70",
        note: null,
        sort: null,
      },
      {
        id: "96c67bea-fda2-4cac-aebe-2d4e7ff1e817",
        age_range: "1-29",
        age_start: "1",
        age_end: "29",
        note: null,
        sort: null,
      },
      {
        id: "be9fc613-6e6a-4514-ae26-97c88790a6d2",
        age_range: "30-34",
        age_start: "30",
        age_end: "34",
        note: null,
        sort: null,
      },
      {
        id: "b3c16c9e2-2c0c-419e-b5b0-cda9ec2c46e",
        age_range: "35-39",
        age_start: "35",
        age_end: "39",
        note: null,
        sort: null,
      },
      {
        id: "b33767b4-402f-45e1-ae4c-edd8429190c9",
        age_range: "40-44",
        age_start: "40",
        age_end: "44",
        note: null,
        sort: null,
      },
      {
        id: "904c3b08-78d2-4490-918b-e61486ef7cc1",
        age_range: "45-49",
        age_start: "45",
        age_end: "49",
        note: null,
        sort: null,
      },
      {
        id: "29a5f033-fa3f-4651-83ed-d6222901fbeb",
        age_range: "50-54",
        age_start: "50",
        age_end: "54",
        note: null,
        sort: null,
      },
      {
        id: "5f2b4980-ebf2-48b3-9c79-f93946e30d66",
        age_range: "55-59",
        age_start: "55",
        age_end: "59",
        note: null,
        sort: null,
      },
      {
        id: "6625e32c-194c-41df-884a-d96d9794a5a0",
        age_range: "60-65",
        age_start: "60",
        age_end: "65",
        note: null,
        sort: null,
      },
      {
        id: "d8a9490b-3ccd-485a-a2ba-eb38e21d593f",
        age_range: "1-39",
        age_start: "1",
        age_end: "39",
        note: null,
        sort: null,
      },
      {
        id: "d88f6b9268-7fc3-42f2-afc3-af13523b47a1",
        age_range: "40-49",
        age_start: "40",
        age_end: "49",
        note: null,
        sort: null,
      },
      {
        id: "9da50636-e49f-4192-b635-2769c8ce84b5",
        age_range: "50-59",
        age_start: "50",
        age_end: "59",
        note: null,
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
