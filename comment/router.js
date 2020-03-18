const { Router } = require("express");
const Comment = require("./model");
const auth = require("../auth/middleware");

const router = new Router();

router.get("/comment", (req, res, next) => {
  Comment.findAll().then(result => {
    return res.send(result);
  });
});

router.post("/comment", auth, (req, res, next) => {
  const comment = { ...req.body, userId: req.user.id, author: req.user.name };
  Comment.create(comment)
    .then(comment => res.status(201).send(comment))
    .catch(next);
});

module.exports = router;
