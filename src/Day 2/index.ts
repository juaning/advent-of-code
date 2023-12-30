/**
 * Day 2: Cube Conundrum
 */
import { fileReader } from "../utils";

export interface GameSet {
  red?: number;
  green?: number;
  blue?: number;
}
export interface GameSets {
  game: number;
  sets: Array<GameSet>;
}
/**
 * This function takes a line of input and returns an object
 * @param line
 * @returns {object} {id: string}
 */
export const getGameSets = (line: string): GameSets => {
  const [game, sets] = line.split(":");
  const [_prefix, id] = game.split(" "); // eslint-disable-line @typescript-eslint/no-unused-vars
  const setsStrArray = sets.split(";");
  const setsArray: Array<GameSet> = setsStrArray.map((set) => {
    const boxes = set.split(",");
    return boxes.reduce((acc: GameSet, box): GameSet => {
      const [number, color] = box.trim().split(" ");
      return {
        ...acc,
        [color]: parseInt(number, 10),
      };
    }, {});
  });
  return {
    game: parseInt(id, 10),
    sets: setsArray,
  };
};
export const checkIfSetIsPossible = (
  game: Array<GameSet>,
  condition: GameSet,
): boolean => {
  for (const set of game) {
    if (set.red && condition.red && set.red > condition.red) {
      return false;
    }
    if (set.green && condition.green && set.green > condition.green) {
      return false;
    }
    if (set.blue && condition.blue && set.blue > condition.blue) {
      return false;
    }
  }
  return true;
};

export const part1 = async (condition: GameSet): Promise<number> => {
  const lines = await fileReader("./src/Day 2/part1");
  return lines.reduce((acc, line) => {
    const gameSets = getGameSets(line);
    return checkIfSetIsPossible(gameSets.sets, condition)
      ? acc + gameSets.game
      : acc;
  }, 0);
};

export const getMaxCubesPerGame = (game: Array<GameSet>): number => {
  const red = game.reduce(
    (acc, set) => (set.red && set.red > acc ? set.red : acc),
    0,
  );
  const green = game.reduce(
    (acc, set) => (set.green && set.green > acc ? set.green : acc),
    0,
  );
  const blue = game.reduce(
    (acc, set) => (set.blue && set.blue > acc ? set.blue : acc),
    0,
  );
  return red * green * blue;
};

export const part2 = async (): Promise<number> => {
  const lines = await fileReader("./src/Day 2/part1");
  return lines.reduce((acc, line) => {
    const gameSets = getGameSets(line);
    return getMaxCubesPerGame(gameSets.sets) + acc;
  }, 0);
};
