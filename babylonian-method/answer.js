const squareRoot = radicand => {
  if (radicand < 0) return NaN;
  const radicandHalf = radicand / 2;
  let guessedSquareRoot = getGuessBetween(0, radicandHalf);
  let fallbackBreak = 0;
  while (
    fallbackBreak <= 100 &&
    getNumberTimesTwo(guessedSquareRoot) !== radicand
  ) {
    guessedSquareRoot = getGuessUntilFindSquareRoot(
      radicand,
      guessedSquareRoot
    );
    fallbackBreak++;
  }

  return guessedSquareRoot;
};

const getGuessUntilFindSquareRoot = (radicand, previousGuess) => {
  const guessTimesTwo = getNumberTimesTwo(previousGuess);
  if (guessTimesTwo !== radicand) {
    const radicandDividedByGuess = radicand / previousGuess;
    return (previousGuess + radicandDividedByGuess) / 2;
  }
  return previousGuess;
};

const getGuessBetween = (start, end) => {
  const difference = end - start;
  const randomNumberBetweenDifference = Math.random() * difference;
  return start + randomNumberBetweenDifference;
};

const getNumberTimesTwo = number => Math.pow(number, 2);

module.exports = squareRoot;
