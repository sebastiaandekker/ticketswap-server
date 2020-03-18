const { Router } = require("express");
const Ticket = require("./model");
const Comment = require("../comment/model");
const auth = require("../auth/middleware");

const router = new Router();

// Get all tickets
router.get("/ticket", (req, res, next) => {
  Ticket.findAll().then(result => {
    return res.send(result);
  });
});

// Create ticket
router.post("/ticket", auth, (req, res, next) => {
  const ticket = { ...req.body, userId: req.user.id, author: req.user.name };
  Ticket.create(ticket)
    .then(ticket => res.status(201).send(ticket))
    .catch(next);
});

// Get ticket by id
router.get("/ticket/:ticketId", (req, res, next) => {
  Ticket.findByPk(req.params.ticketId, { include: [Comment] })
    .then(ticket => {
      if (!ticket) {
        res.status(404).end();
      } else {
        res.json(ticket);
      }
    })
    .catch(next);
});

router.put("/ticket/:ticketId", auth, (req, res, next) => {
  const ticketData = {
    ...req.body,
    userId: req.user.id,
    author: req.user.name
  };
  Ticket.findByPk(req.params.ticketId, { include: [Comment] })
    .then(ticket => {
      if (!ticket) {
        res.status(404).end();
      } else {
        return ticket.update(ticketData);
      }
    })
    .then(ticket => {
      res.send(ticket);
    })
    .catch(next);
});

module.exports = router;
