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
  get: (k, cb) => {
    client.get(k, cb);
  },
  set: (k, v, cb) => {
    client.set(k, v, cb);
  },
};
