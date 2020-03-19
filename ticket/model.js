const Sequlize = require("sequelize");
const db = require("../db");
const User = require("../user/model");
const Event = require("../event/model");

const Ticket = db.define("ticket", {
  price: {
    type: Sequlize.INTEGER,
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
  author: {
    type: Sequlize.STRING
  }
});

Ticket.belongsTo(User);
User.hasMany(Ticket);

Ticket.belongsTo(Event);
Event.hasMany(Ticket);

module.exports = Ticket;
