const generateRandomIntLessThan = (upperLimit) => {
  if (upperLimit === undefined) throw Error("no max limit is provided");
  if (isNaN(upperLimit))
    throw Error(`'${upperLimit}' is not an invalid number`);

  const max = Math.floor(upperLimit);
  return Math.floor(Math.random() * max);
};

module.exports = generateRandomIntLessThan;
