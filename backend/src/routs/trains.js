const express = require("express");

const router = express.Router();

const trains = require("../data/trains");

router.get("/", (_req, res) => {

res.json(trains);

});

module.exports = router;