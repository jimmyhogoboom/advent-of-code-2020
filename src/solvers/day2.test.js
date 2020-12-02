import { part1, part2 } from "./day2";

describe("day 2", () => {
  describe("part 1", () => {
    test.each(["1-3 a: abcde", "2-9 c: ccccccccc"])(
      "finds valid: %s",
      (pass) => {
        expect(part1([pass])).toBe(1);
      }
    );

    test.each(["1-3 b: cdefg"])("finds invalid: %s", (pass) => {
      expect(part1([pass])).toBe(0);
    });
  });

  describe("part 2", () => {
    test.each(["1-3 a: abcde"])("finds valid: %s", (pass) => {
      expect(part2([pass])).toBe(1);
    });

    test.each(["1-3 b: cdefg", "2-9 c: ccccccccc"])(
      "finds invalid: %s",
      (pass) => {
        expect(part2([pass])).toBe(0);
      }
    );
  });
});
