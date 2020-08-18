let tries;

const squareRoot = radicand => {
  if (radicand < 0 || typeof radicand === "string") return NaN;
  const radicandHalf = radicand / 2;
  let guessedSquareRoot = getGuessBetween(0, radicandHalf);
  tries = [];
  return getGuessUntilFindSquareRoot(radicand, guessedSquareRoot);
};

const getGuessUntilFindSquareRoot = (radicand, previousGuess) => {
  const guessTimesTwo = getNumberTimesTwo(previousGuess);
  tries.push(previousGuess);
  if (guessTimesTwo === radicand || tries.length > 50) {
    return previousGuess;
  } else {
    return getAnotherGuess(radicand, previousGuess);
  }
};

const getAnotherGuess = (radicand, previousGuess) => {
  const radicandDividedByGuess = radicand / previousGuess;
  const newGuess = (previousGuess + radicandDividedByGuess) / 2;
  return getGuessUntilFindSquareRoot(radicand, newGuess);
};

const getGuessBetween = (start, end) => {
  const difference = end - start;
  const randomNumberBetweenDifference = Math.random() * difference;
  return start + randomNumberBetweenDifference;
};

const getNumberTimesTwo = number =>
  Math.pow(number * 1000, 2) / Math.pow(1000, 2);

module.exports = squareRoot;
