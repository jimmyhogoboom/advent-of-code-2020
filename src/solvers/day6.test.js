import { getUniqueAnswers, getSharedAnswers, part1 } from './day6';
import getLineGroups from '../util/getLineGroups';

describe('part 1', () => {
  test('getUniqueAnswers', () => {
    expect(getUniqueAnswers(['abc', 'bcd', 'def'])).toStrictEqual([
      'a',
      'b',
      'c',
      'd',
      'e',
      'f',
    ]);
  });

  test.each([
    [['abc'], 3],
    [['a', 'b', 'c'], 0],
    [['ab', 'ac'], 1],
    [['a', 'a', 'a', 'a'], 1],
    [['b'], 1],
  ])('getSharedAnswers', (answers, count) => {
    expect(getSharedAnswers(answers)).toBe(count);
  });

  test('part1', () => {
    const lines = [
      'abc',
      '',
      'a',
      'b',
      'c',
      '',
      'ab',
      'ac',
      '',
      'a',
      'a',
      'a',
      'a',
      '',
      'b',
      '',
    ];

    expect(part1(lines)).toStrictEqual(11);
  });
});

describe('util', () => {
  test('gets em', () => {
    const lines = [
      'abc',
      '',
      'a',
      'b',
      'c',
      '',
      'ab',
      'ac',
      '',
      'a',
      'a',
      'a',
      'a',
      '',
      'b',
      '',
    ];

    expect(getLineGroups(lines)).toStrictEqual([
      ['abc'],
      ['a', 'b', 'c'],
      ['ab', 'ac'],
      ['a', 'a', 'a', 'a'],
      ['b'],
    ]);
  });
});
