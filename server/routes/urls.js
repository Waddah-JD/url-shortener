const express = require("express");
const router = express.Router();

const redisClient = require("../db");
const { addNewUrl } = require("../controllers/urls");

router.route("/:shortUrl").get(async (req, res) => {
  try {
    const fullUrl = await redisClient.get(req.params.shortUrl);
    res.redirect(fullUrl);
  } catch (error) {
    return { status: "failure", error };
  }
});

router.route("/").post(async (req, res) => {
  const { fullUrl } = req.body;
  try {
    const result = await addNewUrl(fullUrl);
    res.json(result);
  } catch (error) {
    res.json({ status: "failure", error });
  }
});

module.exports = router;
