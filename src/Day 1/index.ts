/**
 * https://adventofcode.com/2023/day/1
 */
export const getNumberFromLinePart1 = (line: string): number => {
  const regexFirstNumber = /\d(?:)/;
  const regexLastNumber = /\d(?=\D*$)/;
  const firstNumber = line.match(regexFirstNumber);
  const lastNumber = line.match(regexLastNumber);
  const d1 = firstNumber ? firstNumber[0] : "";
  const d2 = lastNumber ? lastNumber[0] : "";
  const result = parseInt(d1 + d2, 10);
  return isNaN(result) ? 0 : result;
};
