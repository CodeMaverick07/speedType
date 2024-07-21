export const countError = (input: string, output: string) => {
  let count = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] !== output[i]) {
      count++;
    }
  }
  return count;
};

export const calculateAccuracyPercentage = (
  countErr: number,
  totalTyped: number
) => {
  if (totalTyped === 0) return 0;
  const correctTyped = totalTyped - countErr;
  const accuracy = (correctTyped / totalTyped) * 100;

  return Math.round(accuracy * 10) / 10;
};

export const countErrorsWords = (input: string, words: string) => {
  const typedWords = input.split(" ");
  const expectedWords = words.split(" ");
  typedWords.reduce((errors, expectedWord, i) => {
    if (expectedWord !== expectedWords[i]) {
      return errors + 1;
    }
    return errors;
  }, 0);
};

export const formatPercentage = (percentage: number) => {
  return percentage.toFixed(0) + "%";
};

// accept only letters and whitespaces
export const isKeyboardCodeAllowed = (code: string) => {
  return (
    code.startsWith("Key") ||
    code.startsWith("Digit") ||
    code === "Backspace" ||
    code === "Space"
  );
};
export const calculateWPM = (
  typedWords: string,
  originalWords: string,
  timeInSeconds: number
) => {
  const typedArray = typedWords.trim().split(/\s+/);
  const originalArray = originalWords.trim().split(/\s+/);

  let correctWords = 0;
  for (let i = 0; i < typedArray.length; i++) {
    if (typedArray[i] === originalArray[i]) {
      correctWords++;
    }
  }

  const timeInMinutes = timeInSeconds / 60;

  const wpm = correctWords / timeInMinutes;

  return wpm;
};
