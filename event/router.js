const { Router } = require("express");
const Event = require("./model");
const Ticket = require("../ticket/model");

const router = new Router();

// Get all events
router.get("/event", (req, res, next) => {
  Event.findAll().then(result => {
    return res.send(result);
  });
});

// Create event
router.post("/event", (req, res, next) => {
  // const data = { ...req.body, userId: 2 };
  Event.create(req.body)
    .then(event => res.status(201).send(event))
    .catch(next);
});

// Get event by id
router.get("/event/:eventId", (req, res, next) => {
  Event.findByPk(req.params.eventId, { include: [Ticket] })
    .then(event => {
      if (!event) {
        res.status(404).end();
      } else {
        res.json(event);
      }
    })
    .catch(next);
});

module.exports = router;
