"use strict";

const { mockCanais } = require("../../../mock/mock.cjs");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const canaisComTimestamps = mockCanais.map((canal) => ({
      ...canal,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));

    await queryInterface.bulkInsert("canais", canaisComTimestamps);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("canais", null, {});
  },
};
