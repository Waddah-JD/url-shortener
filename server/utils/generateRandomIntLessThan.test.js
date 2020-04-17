const generateRandomIntLessThan = require("./generateRandomIntLessThan");

describe("generateRandomIntLessThan()", () => {
  test("should throw an error if maxNum is undefined", () => {
    expect(() => generateRandomIntLessThan()).toThrow(
      "no max limit is provided"
    );
  });

  test("should throw an error if priovided maxNum is not a valid number", () => {
    expect(() => generateRandomIntLessThan("one")).toThrow(
      "'one' is not an invalid number"
    );
  });

  test("should return a random number less than provided limit", () => {
    expect(generateRandomIntLessThan(1)).toEqual(0);
    expect(generateRandomIntLessThan(1)).toBeLessThan(1);
    expect(generateRandomIntLessThan(10)).toBeLessThan(10);
    expect(generateRandomIntLessThan(100)).toBeLessThan(100);
  });
});
