const express = require("express");
const router = express.Router();

//Item Model
const Item = require("../models/Item");

//@route GET /getAll
router.get("/getAll", (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then((items) => res.json(items))
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

//@router POST /add
router.post("/add", (req, res) => {
  console.log(req.body.name);
  const newItem = new Item({
    name: req.body.name,
  });

  newItem
    .save()
    .then((item) => res.json(item))
    .catch((err) => res.json(err));
});

module.exports = router;
