"use strict";

const { mockFreeVideos } = require("../../../mock/mock.cjs");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const videoComTimestamps = mockFreeVideos.map((video) => ({
      ...video,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));

    await queryInterface.bulkInsert("videos", videoComTimestamps);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("videos", null, {});
  },
};
