import {
  getNumberFromLinePart1,
  part1,
  getNumberFromLinePart2,
  part2,
} from "../../src/Day 1";
import * as utils from "../../src/utils";

let fileReaderSpy:
  | jest.Mock<any, any, any> // eslint-disable-line @typescript-eslint/no-explicit-any
  | jest.SpyInstance<Promise<string[]>, [filePath: string], any>; // eslint-disable-line @typescript-eslint/no-explicit-any
beforeAll(() => {
  fileReaderSpy = jest.fn();
  fileReaderSpy = jest.spyOn(utils, "fileReader");
});
beforeEach(() => {
  fileReaderSpy.mockReset();
});
describe("Day 1", () => {
  describe("getNumberFromLinePart1", () => {
    it("'1abc2' should return 12", () => {
      expect(getNumberFromLinePart1("1abc2")).toEqual(12);
    });
    it("'pqr3stu8vwx' should return 38", () => {
      expect(getNumberFromLinePart1("pqr3stu8vwx")).toEqual(38);
    });
    it("'a1b2c3d4e5f' should return 15", () => {
      expect(getNumberFromLinePart1("a1b2c3d4e5f")).toEqual(15);
    });
    it("'treb7uchet' should return 77", () => {
      expect(getNumberFromLinePart1("treb7uchet")).toEqual(77);
    });
  });
  describe("part1", () => {
    it("should return 142", () => {
      fileReaderSpy.mockResolvedValue([
        "1abc2",
        "pqr3stu8vwx",
        "a1b2c3d4e5f",
        "treb7uchet",
      ]);
      expect(part1()).resolves.toBe(142);
    });
  });
  describe("getNumberFromLinePart2", () => {
    it("'two1nine' should return 29", () => {
      expect(getNumberFromLinePart2("two1nine")).toEqual(29);
    });
    it("'eightwothree' should return 83", () => {
      expect(getNumberFromLinePart2("eightwothree")).toEqual(83);
    });
    it("'abcone2threexyz' should return 13", () => {
      expect(getNumberFromLinePart2("abcone2threexyz")).toEqual(13);
    });
    it("'xtwone3four' should return 24", () => {
      expect(getNumberFromLinePart2("xtwone3four")).toEqual(24);
    });
    it("'4nineeightseven2' should return 42", () => {
      expect(getNumberFromLinePart2("4nineeightseven2")).toEqual(42);
    });
    it("'zoneight234' should return 14", () => {
      expect(getNumberFromLinePart2("zoneight234")).toEqual(14);
    });
    it("'7pqrstsixteen' should return 76", () => {
      expect(getNumberFromLinePart2("7pqrstsixteen")).toEqual(76);
    });
    it("'abc2x3oneight' should return 28", () => {
      expect(getNumberFromLinePart2("abc2x3oneight")).toEqual(28);
    });
    it("'oneight' should return 18", () => {
      expect(getNumberFromLinePart2("oneight")).toEqual(18);
    });
    it("'oneigthree' should return 13", () => {
      expect(getNumberFromLinePart2("oneigthree")).toEqual(13);
    });
    it("'twone' should return 21", () => {
      expect(getNumberFromLinePart2("twone")).toEqual(21);
    });
    it("'386fivensrl' should return 35", () => {
      expect(getNumberFromLinePart2("386fivensrl")).toEqual(35);
    });
    it("'116nqmtvbcbninefourninetwonenkb' should return 11", () => {
      expect(getNumberFromLinePart2("116nqmtvbcbninefourninetwonenkb")).toEqual(
        11,
      );
    });
    it("'ninetwonine7ninetwonend' should return 91", () => {
      expect(getNumberFromLinePart2("ninetwonine7ninetwonend")).toEqual(91);
    });
  });
  describe("part2", () => {
    it("should return 281", () => {
      fileReaderSpy.mockResolvedValue([
        "two1nine",
        "eightwothree",
        "abcone2threexyz",
        "xtwone3four",
        "4nineeightseven2",
        "zoneight234",
        "7pqrstsixteen",
      ]);
      expect(part2()).resolves.toBe(281);
    });
  });
});
