require("dotenv").config();

module.exports = {
  development: {
    url: process.env.DATABASE_URL,
    dialect: "postgres",
    logging: true,
  },
  test: {
    url: process.env.DATABASE_URL,
    dialect: "postgres",
    logging: true,
  },
  production: {
    url: process.env.DATABASE_URL,
    dialect: "postgres",
    logging: true,
  },
};
