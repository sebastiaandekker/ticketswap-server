const Sequlize = require("sequelize");
const db = require("../db");
const User = require("../user/model");

const Event = db.define(
  "event",
  {
    name: {
      type: Sequlize.STRING,
      allowNull: false
    },
    description: {
      type: Sequlize.TEXT,
      allowNull: false
    },
    picture: {
      type: Sequlize.STRING,
      allowNull: false
    },
    startDate: {
      type: Sequlize.DATEONLY,
      allowNull: false
    },
    endDate: {
      type: Sequlize.DATEONLY,
      allowNull: false
    }
  },
  {
    timestamps: false
  }
);

Event.belongsTo(User);
User.hasMany(Event);

module.exports = Event;
