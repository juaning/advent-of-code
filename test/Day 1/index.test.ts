import { getNumberFromLinePart1 } from "../../src/Day 1";

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
});
