const { Router } = require("express");
const Ticket = require("./model");
const Comment = require("../comment/model");

const router = new Router();

// Get all tickets
router.get("/ticket", (req, res, next) => {
  Ticket.findAll().then(result => {
    return res.send(result);
  });
});

// Create ticket
router.post("/ticket", (req, res, next) => {
  // const data = { ...req.body, eventId: req.event.id };
  Ticket.create(req.body)
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

router.put("/ticket/:ticketId", (req, res, next) =>
  Ticket.findByPk(req.params.ticketId)
    .then(ticket => {
      if (!ticket) {
        res.status(404).end();
      } else {
        return ticket.update(req.body);
      }
    })
    .then(ticket => {
      res.send(ticket);
    })
    .catch(next)
);

module.exports = router;
