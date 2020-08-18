const squareRoot = require("./answer");

test("should get 4 as the square root of 16", () => {
  const radicand = 16;
  const actual = squareRoot(radicand);
  const expected = 4;
  expect(actual).toBe(expected);
});

test("it calculates a decimal square root", () => {
  const radicand = 423432.342423;
  const actual = squareRoot(radicand);
  const expected = 650.7167912563806;
  expect(actual).toBe(expected);
});

test("it produces synonymous results with JS native Math.sqrt fn", () => {
  const radicand = 423432.342423;
  const actual = squareRoot(radicand);
  const expected = Math.sqrt(radicand);
  expect(actual).toBe(expected);
});

test("it calculates infinite fraction square roots", () => {
  const radicand = 10;
  const actual = squareRoot(radicand);
  const expected = 3.162277660168379;
  expect(actual).toBe(expected);
});

test("it returns NaN if a negative value is passed as the radicand", () => {
  const negativeRadicand = -10;
  const actual = squareRoot(negativeRadicand);
  expect(actual).toBe(NaN);
});

test("it returns NaN if a non-number is passed as the radicand", () => {
  const stringRadicand = "some string";
  const actual = squareRoot(stringRadicand);
  expect(actual).toBe(NaN);
});

test("it returns NaN if NaN is passed as the radicand", () => {
  const nanRadicand = NaN;
  const actual = squareRoot(nanRadicand);
  expect(actual).toBe(NaN);
});
