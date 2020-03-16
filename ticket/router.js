const { Router } = require("express");
const Ticket = require("./model");

const router = new Router();

router.get("/ticket", (req, res, next) => {
  Ticket.findAll().then(result => {
    return res.send(result);
  });
});

router.post("/ticket", (req, res, next) => {
  // const data = { ...req.body, eventId: req.event.id };
  Ticket.create(req.body)
    .then(ticket => res.status(201).send(ticket))
    .catch(next);
});

module.exports = router;
