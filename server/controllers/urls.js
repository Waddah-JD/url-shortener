const redisClient = require("../db");

const generateRandomId = require("../utils/generateRandomId");

const addNewUrl = async (fullUrl) => {
  let shortUrl;

  const alreadyAddedKeys = await redisClient.getAllKeys();

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

module.exports = { addNewUrl };
