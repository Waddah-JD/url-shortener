const express = require("express");
const router = express.Router();

const redisClient = require("../db");
const { addNewUrl } = require("../controllers/urls");

router.route("/:shortUrl").get((req, res) => {
  return redisClient
    .get(req.params.shortUrl)
    .then((fullUrl) => {
      res.redirect(fullUrl);
    })
    .catch((err) => {
      return { status: "failure", err };
    });
});

router.route("/").post((req, res) => {
  const { fullUrl } = req.body;
  const result = addNewUrl(fullUrl);
  console.log("result", result);
  res.json(result);
});

module.exports = router;
