const express = require("express");

const router = express.Router();

const redisClient = require("../db");

router
  .route("/")
  .get((req, res) => {
    res.send("Welcome to URL Shortener");
  })
  .post((req, res) => {
    const { shortUrl, fullUrl } = req.body;
    redisClient.set(shortUrl, fullUrl, (err) => {
      if (err) res.send({ status: "fail", err });
      else res.send({ status: "success" });
    });
  });

module.exports = router;
