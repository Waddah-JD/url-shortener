const generateRandomIntLessThan = require("./generateRandomIntLessThan");

const possibleValues =
  "_-0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

const generateRandomId = (len) => {
  if (!len || typeof len !== "number") {
    len = 0;
  }
  let id = "";
  while (len !== 0) {
    id += possibleValues[generateRandomIntLessThan(possibleValues.length)];
    len--;
  }
  return id;
};

module.exports = generateRandomId;
