const express = require("express");
const router = express.Router();
const user = require("../data");
router.get("/hi", (req, res) => res.send("HELLO"));
router.get("/all", (req, res) => res.json(user));
router.get("/byId/:id", (req, res) => {
  const userById = user.filter((user) => user.id == parseInt(req.params.id));
  if (userById.length === 0) {
    res.status(400).json("no user for id = " + req.params.id);
  } else {
    res.json(userById);
  }
});
router.get("/byName/:name", (req, res) => {
  const userById = user.filter((user) => user.firstName == req.params.name);
  if (userById.length === 0) {
    res.status(400).json("no user for id = " + req.params.id);
  } else {
    res.json(userById);
  }
});
router.post("/addUser", (req, res) => {
  const { id, firstName, age } = req.body;
  //console.log(req.body);
  const newUser = {
    id: id,
    firstName: firstName,
    age: age,
  };

  user.push(newUser);
  res.json(user);
});
router.put("/updateUserById/:id/:name", (req, res) => {
  console.log(req.params.name);
  const userById = user.filter((user) => user.id == parseInt(req.params.id));
  if (userById.length === 0) {
    res.status(400).json("no user for id = " + req.params.id);
  } else {
    userById[0].firstName = req.params.name;
    console.log(userById);
    res.json(userById);
  }
});

module.exports = router;
