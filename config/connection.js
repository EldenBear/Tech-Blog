const Sequelize = require("sequilize");
require("dotenv").config();

let sequelize;

if (process.env.TECHDB_URL) {
  sequelize = new Sequelize(process.env.TECHDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: "localhost",
      dialect: "mysql",
      port: 3001,
    }
  );
}

module.exports = sequelize;
