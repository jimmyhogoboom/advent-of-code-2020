import { getMatrix, getPosition } from "./day3";

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
});
