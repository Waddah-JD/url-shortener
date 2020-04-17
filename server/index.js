const express = require("express");

const redisClient = require("./db");

const PORT = process.env.SERVER_PORT || 8080;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/u", require("./routes/urls"));
app.use("/", require("./routes/index"));

app.listen(PORT, () => {
  console.log(`Server is up on ${PORT}`);
});
