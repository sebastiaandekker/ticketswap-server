const { Router } = require("express");
const Comment = require("./model");

const router = new Router();

router.get("/comment", (req, res, next) => {
  Comment.findAll().then(result => {
    return res.send(result);
  });
});

router.post("/comment", (req, res, next) => {
  // const data = { ...req.body, eventId: req.event.id };
  Comment.create(req.body)
    .then(comment => res.status(201).send(comment))
    .catch(next);
});

module.exports = router;
