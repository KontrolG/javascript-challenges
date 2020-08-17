const squareRoot = radicand => {
  // Step 1
  const radicandHalf = radicand / 2;
  const randomNumberLessThanHalf = getGuessBetween(0, radicandHalf);
  let guessedSquareRoot = randomNumberLessThanHalf;
  let fallbackBreak = 0;
  const results = [];
  while (
    fallbackBreak <= 10 &&
    getNumberTimesTwo(guessedSquareRoot) !== radicand
  ) {
    guessedSquareRoot = getGuessUntilFindSquareRoot(
      radicand,
      guessedSquareRoot
    );
    results.push(guessedSquareRoot);
    fallbackBreak++;
  }

  return guessedSquareRoot;
};

const getGuessUntilFindSquareRoot = (radicand, previousGuess) => {
  const guessTimesTwo = getNumberTimesTwo(previousGuess);
  if (guessTimesTwo < radicand) {
    const radicandDividedByGuess = radicand / previousGuess;
    return (previousGuess + radicandDividedByGuess) / 2;
  }
  if (guessTimesTwo > radicand) {
    const guessDividedByRadicand = radicand / previousGuess;
    return (previousGuess + guessDividedByRadicand) / 2;
  }
  return previousGuess;
};

const getGuessBetween = (start, end) => {
  const difference = end - start;
  const randomNumberBetweenDifference = Math.random() * difference;
  return start + randomNumberBetweenDifference;
};

const getNumberTimesTwo = number => Math.pow(number, 2);

const isTheSquareRootOfRadicand = (number, radicand) =>
  getNumberTimesTwo(number) === radicand;

module.exports = squareRoot;
