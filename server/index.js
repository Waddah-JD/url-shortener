const express = require("express");
const cors = require("cors");

const PORT = process.env.SERVER_PORT || 8080;

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", require("./routes/urls"));

app.listen(PORT, () => {
  console.log(`Server is up on ${PORT}`);
});
