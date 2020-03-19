const { Router } = require("express");
const Event = require("./model");
const Ticket = require("../ticket/model");
const Comment = require("../comment/model");
const auth = require("../auth/middleware");

const router = new Router();

// Get all events
router.get("/event", (req, res, next) => {
  Event.findAll().then(result => {
    return res.send(result);
  });
});

// Create event
router.post("/event", auth, (req, res, next) => {
  const event = { ...req.body, userId: req.user.id };
  Event.create(event)
    .then(event => res.status(201).send(event))
    .catch(next);
});

// Get event by id
router.get("/event/:eventId", (req, res, next) => {
  Event.findByPk(req.params.eventId, {
    include: [{ model: Ticket, include: [Comment] }]
  })
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
