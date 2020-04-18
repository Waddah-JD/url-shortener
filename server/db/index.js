const redis = require("redis");
const client = redis.createClient({ url: process.env.REDIS_URL });

client.on("connect", () => {
  console.log("Redis client connected");
});

client.on("ready", () => {
  console.log("Redis client is ready on: ", process.env.REDIS_URL);
});

client.on("error", (err) => {
  console.log("Something went wrong " + err);
});

module.exports = {
  get: (k) => {
    return new Promise((resolve, reject) => {
      client.get(k, (err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      });
    });
  },

  set: (k, v) => {
    return new Promise((resolve, reject) => {
      client.set(k, v, (err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      });
    });
  },

  getAllKeys: () => {
    return new Promise((resolve, reject) => {
      client.keys("*", (err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      });
    });
  },
};
