const express = require("express");

const router = express.Router();

const redisClient = require("../db");

router.route("/:shortUrl").get((req, res) => {
  redisClient.get(req.params.shortUrl, (err, fullUrl) => {
    if (err) {
      res.json({ status: "fail", err });
    } else {
      res.json({ status: "success", fullUrl });
    }
  });
});

module.exports = router;
