import { part1 as d1p1, part2 as d1p2 } from "./Day 1";
import { GameSet, part1 as d2p1, part2 } from "./Day 2";

console.log("Advent of code solutions for 2023");
(async () => {
  console.log("Day 1");
  console.log("part 1:", await d1p1());
  console.log("part 2:", await d1p2());
  console.log("Day 2");
  const condition: GameSet = { red: 12, green: 13, blue: 14 };
  console.log("part 1:", await d2p1(condition));
  console.log("part 2:", await part2());
})();
