import {
  getGameSets,
  GameSet,
  checkIfSetIsPossible,
  part1,
  getMaxCubesPerGame,
  part2,
} from "../../src/Day 2";
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
describe("Day 2", () => {
  describe("Part 1", () => {
    it("should return an object with the id as the key and an array of sets as the value", () => {
      const line: string =
        "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green";
      const result = getGameSets(line);
      console.log(result);
      expect(result).toHaveProperty("game");
      expect(result).toHaveProperty("sets");
      expect(result.sets).toHaveLength(3);
      expect(result.sets[0]).toHaveProperty("blue");
    });
    it("should return that game is possible", () => {
      const game: Array<GameSet> = [
        { blue: 3, red: 4 },
        { red: 1, green: 2, blue: 6 },
        { green: 2 },
      ];
      expect(checkIfSetIsPossible(game, { blue: 14, red: 12, green: 13 })).toBe(
        true,
      );
    });
    it("should return that game is not possible", () => {
      const game: Array<GameSet> = [
        { blue: 3, red: 4 },
        { red: 1, green: 2, blue: 6 },
        { green: 2 },
      ];
      expect(checkIfSetIsPossible(game, { blue: 4, red: 1 })).toBe(false);
    });
    it("valid games ids should add up to 8 for part 1", () => {
      fileReaderSpy.mockResolvedValue([
        "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green",
        "Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue",
        "Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red",
        "Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red",
        "Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green",
      ]);
      const condition: GameSet = { red: 12, green: 13, blue: 14 };
      expect(part1(condition)).resolves.toBe(8);
    });
    it("power of cubes for game 1 should be 48", () => {
      const game: Array<GameSet> = [
        { blue: 3, red: 4 },
        { red: 1, green: 2, blue: 6 },
        { green: 2 },
      ];
      expect(getMaxCubesPerGame(game)).toBe(48);
    });
    it("the sum of powers for part 2 should be 2286", () => {
      fileReaderSpy.mockResolvedValue([
        "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green",
        "Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue",
        "Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red",
        "Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red",
        "Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green",
      ]);
      expect(part2()).resolves.toBe(2286);
    });
  });
});
