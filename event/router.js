const { Router } = require("express");
const Event = require("./model");

const router = new Router();

router.get("/event", (req, res, next) => {
  Event.findAll().then(result => {
    return res.send(result);
  });
});

router.post("/event", (req, res, next) => {
  // const data = { ...req.body, userId: 2 };
  Event.create(req.body)
    .then(event => res.status(201).send(event))
    .catch(next);
});

module.exports = router;
