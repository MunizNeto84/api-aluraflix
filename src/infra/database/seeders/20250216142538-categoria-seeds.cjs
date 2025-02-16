"use strict";

const { mockCategorias } = require("../../../mock/mock.cjs");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const categoriasComTimestamps = mockCategorias.map((categoria) => ({
      ...categoria,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));

    await queryInterface.bulkInsert("categorias", categoriasComTimestamps);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("categorias", null, {});
  },
};
