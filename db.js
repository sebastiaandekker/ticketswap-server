const Sequelize = require("sequelize");

const databaseURL =
  process.env.DATABASE_URL ||
  "postgres://postgres:183bna09n309hfdfh2309qy8weuhq23@localhost:5432/postgres";

const db = new Sequelize(databaseURL);

db.sync({ force: false })
  .then(() => console.log("Database synced"))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });

module.exports = db;
