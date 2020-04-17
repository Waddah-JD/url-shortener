const exprees = require("express");

const redisClient = require("./db");

const PORT = process.env.SERVER_PORT || 8080;

const app = exprees();

app.get("/set-test", (req, res) => {
  redisClient.set("testStatus", "SUCCESS", (err) => {
    if (err) res.send(err);
    else res.send("done!");
  });
});

app.get("/get-test", (req, res) => {
  redisClient.get("testStatus", (err, result) => {
    if (err) res.send(err);
    else {
      res.json(result);
    }
  });
});

app.get("/", (req, res) => {
  res.send("GET SUCCESS");
});

app.listen(PORT, () => {
  console.log(`Server is up on ${PORT}`);
});
