"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nomeCompleto: {
        allowNull: false,
        type: Sequelize.STRING(70),
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING(45),
        unique: true,
      },
      senha: {
        allowNull: false,
        type: Sequelize.STRING(245),
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("users");
  },
};
