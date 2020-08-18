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

// test("it returns NaN if a negative value is passed as the radicand", assert => {
//   const negativeRadicand = -10;
//   const actual = squareRoot(negativeRadicand);

//   assert.ok(isNaN(actual), "should return NaN for negative radicand");

//   assert.end();
// });

// test("it returns NaN if a non-number is passed as the radicand", assert => {
//   const stringRadicand = "some string";
//   const actual = squareRoot(stringRadicand);

//   assert.ok(isNaN(actual), "should return NaN for non-number radicand");

//   assert.end();
// });

// test("it returns NaN if NaN is passed as the radicand", assert => {
//   const nanRadicand = NaN;
//   const actual = squareRoot(nanRadicand);

//   assert.ok(isNaN(actual), "should return NaN for NaN radicand");

//   assert.end();
// });
