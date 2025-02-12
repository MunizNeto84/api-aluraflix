"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("canais", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nickName: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING,
      },
      urlLogo: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      urlCapa: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      urlPerfil: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      urlCarrossel: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      views: {
        allowNull: false,
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable("canais");
  },
};
