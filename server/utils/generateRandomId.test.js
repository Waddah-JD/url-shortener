const generateRandomId = require("./generateRandomId");

describe("generateRandomId()", () => {
  test("should return a string", () => {
    expect(typeof generateRandomId(3)).toEqual("string");
  });

  test("should return an empty string if provided length is zero", () => {
    expect(generateRandomId(0)).toEqual("");
  });

  test("should return an empty string if no length is provided (or length is not a valid num)", () => {
    expect(generateRandomId(undefined)).toEqual("");
    expect(generateRandomId(null)).toEqual("");
  });

  test("should return a string equal to provided length", () => {
    expect(generateRandomId(3).length).toEqual(3);
    expect(generateRandomId(5).length).toEqual(5);
    expect(generateRandomId(10).length).toEqual(10);
  });
});
