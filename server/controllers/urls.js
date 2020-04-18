const redisClient = require("../db");

const generateRandomId = require("../utils/generateRandomId");

const addNewUrl = async (fullUrl) => {
  let shortUrl;
  let alreadyAddedKeys;

  try {
    alreadyAddedKeys = await redisClient.getAllKeys();
  } catch (err) {
    alreadyAddedKeys = [];
  }

  while (!shortUrl) {
    const generated = generateRandomId(7);
    if (alreadyAddedKeys.indexOf(generated) === -1) {
      shortUrl = generated;
    }
  }

  try {
    await redisClient.set(shortUrl, fullUrl);
    return { status: "success", url: { shortUrl, fullUrl } };
  } catch (error) {
    return { status: "failure", error };
  }
};

const getAllUrls = async () => {
  try {
    const alreadyAddedKeys = await redisClient.getAllKeys();
    return { status: "success", urls: alreadyAddedKeys };
  } catch (error) {
    return { status: "failure", error };
  }
};

module.exports = { addNewUrl, getAllUrls };
