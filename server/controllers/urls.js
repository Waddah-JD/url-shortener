const redisClient = require("../db");

const generateRandomId = require("../utils/generateRandomId");

const addNewUrl = (fullUrl) => {
  const shortUrl = generateRandomId(7);
  console.log("shortUrl : ", shortUrl);

  return redisClient
    .set(shortUrl, fullUrl)
    .then((res) => {
      return { status: "success", res };
    })
    .catch((err) => {
      return { status: "failure", err };
    });
};

module.exports = { addNewUrl };
