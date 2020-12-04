import { getMatrix, getPosition, part1, hitsInSlope, part2 } from "./day3";

describe("day 3", () => {
  describe("getMatrix", () => {
    test("gets matrix", () => {
      const lines = ["..##....", "..#..#.#"];
      expect(getMatrix(lines)).toStrictEqual([
        [0, 0, 1, 1, 0, 0, 0, 0],
        [0, 0, 1, 0, 0, 1, 0, 1],
      ]);
    });
  });

  describe("getPosition", () => {
    const lines = ["..##....", "..#..#.#"];
    test.each([
      [2, 1, 1],
      [2, 0, 1],
      [1, 0, 0],
      [8, 1, 0], // repeats to the right
      [10, 1, 1], // repeats to the right
    ])("gets position", (x, y, result) => {
      expect(getPosition(getMatrix(lines), [x, y])).toBe(result);
    });
  });

  describe("part 1", () => {
    test("gets hits", () => {
      const lines = [
        "..##.......",
        "#...#...#..",
        ".#....#..#.",
        "..#.#...#.#",
        ".#...##..#.",
        "..#.##.....",
        ".#.#.#....#",
        ".#........#",
        "#.##...#...",
        "#...##....#",
        ".#..#...#.#",
      ];
      expect(part1(lines)).toBe(7);
    });
  });

  describe("part 2", () => {
    const lines = [
      "..##.......",
      "#...#...#..",
      ".#....#..#.",
      "..#.#...#.#",
      ".#...##..#.",
      "..#.##.....",
      ".#.#.#....#",
      ".#........#",
      "#.##...#...",
      "#...##....#",
      ".#..#...#.#",
    ];
    test.each([
      [1, 1, 2],
      [3, 1, 7],
      [5, 1, 3],
      [7, 1, 4],
      [1, 2, 2],
    ])("gets hits", (x, y, hits) => {
      expect(hitsInSlope(getMatrix(lines), [x, y])).toBe(hits);
    });
    test("multiplies correctly", () => {
      expect(part2(lines)).toBe(336);
    });
  });
});
