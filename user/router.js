const { Router } = require("express");
const bcrypt = require("bcrypt");
const User = require("./model");

// Create route to get user information
// 1. define get route /user/:userId
// 2. find user ByPk and include the Image-array
// 3. respond by sending the user object containing the Image-array as a property
// 4. check with http

const router = new Router();

router.get("/user", (req, res, next) => {
  User.findAll().then(result => {
    return res.send(result);
  });
});

// Create a user
router.post("/user", (req, res, next) => {
  const user = {
    name: req.body.name,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 10)
  };
  User.create(user)
    .then(user => res.status(201).send(user))
    .catch(next);
});

// Get users information
router.get("/user/:userId", (req, res, next) => {
  User.findByPk(req.params.userId)
    .then(user => {
      if (!user) {
        res.status(404).end();
      } else {
        res.json(user);
      }
    })
    .catch(next);
});

module.exports = router;
