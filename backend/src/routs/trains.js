const express = require("express");

const router = express.Router();

const trains = require("../data/trains");

router.get("/", (_req, res) => {

res.json(trains);

});

router.get("/search", (req, res) => {
  const query = req.query.q?.toLowerCase() || "";

  const result = trains.filter(train =>
    train.number.toLowerCase().includes(query) ||
    train.from.toLowerCase().includes(query) ||
    train.to.toLowerCase().includes(query)
  );

  res.json(result);
});

module.exports = router;