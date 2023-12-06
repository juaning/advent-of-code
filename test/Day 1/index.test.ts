import { getNumberFromLine } from "../../src/Day 1";

describe("Day 1", () => {
  describe("getNumberFromLine", () => {
    it("should return 0", () => {
      expect(getNumberFromLine("")).toEqual(0);
    });
  });
});
