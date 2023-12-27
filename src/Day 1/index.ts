/**
 * https://adventofcode.com/2023/day/1
 */
import { fileReader } from "../utils";

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
export const part1 = async (): Promise<number> => {
  const lines = await fileReader("./src/Day 1/part1");
  return lines.reduce((acc, line) => acc + getNumberFromLinePart1(line), 0);
};

const numMapper: Record<string, string> = {
  one: "1",
  two: "2",
  three: "3",
  four: "4",
  five: "5",
  six: "6",
  seven: "7",
  eight: "8",
  nine: "9",
  eno: "1",
  owt: "2",
  eerht: "3",
  ruof: "4",
  evif: "5",
  xis: "6",
  neves: "7",
  thgie: "8",
  enin: "9",
  "1": "1",
  "2": "2",
  "3": "3",
  "4": "4",
  "5": "5",
  "6": "6",
  "7": "7",
  "8": "8",
  "9": "9",
};

export const getNumberFromLinePart2 = (line: string): number => {
  /**
   * This regex matches the first digit in the string or
   * the first spelled out number in the string.
   */
  const regexFirstNumber =
    /\d(?:)|one|two|three|four|five|six|seven|eight|nine/i;
  const regexLastNumber =
    /\d(?:)|eno|owt|eerht|ruof|evif|xis|neves|thgie|enin/i;
  const num1 = line.match(regexFirstNumber);
  const num2 = line.split("").reverse().join("").match(regexLastNumber);
  const d1 = num1 ? numMapper[num1[0]] : "";
  const d2 = num2 ? numMapper[num2[0]] : "";
  const result = parseInt(d1 + d2, 10);
  return isNaN(result) ? 0 : result;
};

export const part2 = async (): Promise<number> => {
  const lines = await fileReader("./src/Day 1/part2");
  return lines.reduce((acc, line) => acc + getNumberFromLinePart2(line), 0);
};
