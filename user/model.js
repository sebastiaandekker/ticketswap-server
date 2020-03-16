const Sequlize = require("sequelize");
const db = require("../db");

const User = db.define(
  "user",
  {
    name: {
      type: Sequlize.STRING,
      allowNull: false
    },
    email: {
      type: Sequlize.STRING,
      allowNull: false
    },
    password: {
      type: Sequlize.STRING,
      allowNull: false
    }
  },
  {
    timestamps: false
  }
);

module.exports = User;
