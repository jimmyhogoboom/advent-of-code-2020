import { splitRow, getSeatId, getSeat, part1 } from './day5';

describe('day 5', () => {
  describe('splitRow', () => {
    test.each([
      [0, 127, 'F', [0, 63]],
      [0, 63, 'B', [32, 63]],
      [32, 63, 'F', [32, 47]],
      [32, 47, 'B', [40, 47]],
      [40, 47, 'B', [44, 47]],
      [44, 47, 'F', [44, 45]],
      [44, 45, 'F', 44],
      [0, 7, 'R', [4, 7]],
      [4, 7, 'L', [4, 5]],
      [4, 5, 'R', 5],
    ])('splitRow(%s, %s, %s) = %s', (min, max, dir, result) => {
      expect(splitRow(min, max, dir)).toStrictEqual(result);
    });
  });

  describe('seatId', () => {
    test.each([
      [44, 5, 357],
      [70, 7, 567],
      [14, 7, 119],
      [102, 4, 820],
    ])('getSeatId', (row, column, id) => {
      expect(getSeatId(row, column)).toBe(id);
    });
  });

  describe('getSeat', () => {
    test.each([
      ['BFFFBBFRRR', [70, 7]],
      ['FFFBBBFRRR', [14, 7]],
      ['BBFFBBFRLL', [102, 4]],
    ])('getSeat', (code, position) => {
      expect(getSeat(code)).toStrictEqual(position);
    });
  });

  describe('part1', () => {
    test('part1', () => {
      expect(part1(['BFFFBBFRRR', 'FFFBBBFRRR', 'BBFFBBFRLL'])).toBe(820);
    });
  });
});
