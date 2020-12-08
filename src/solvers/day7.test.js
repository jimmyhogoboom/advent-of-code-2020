import { createBag, doesBagHoldBag, findBag, getBags, part1 } from './day7';

describe('day 7', () => {
  test.each([
    [
      'light red bags contain 1 bright white bag, 2 muted yellow bags.',
      {
        color: 'light red',
        contains: [
          { count: 1, color: 'bright white' },
          { count: 2, color: 'muted yellow' },
        ],
      },
    ],
    [
      'bright white bags contain 1 shiny gold bag.',
      {
        color: 'bright white',
        contains: [{ count: 1, color: 'shiny gold' }],
      },
    ],
    [
      'shiny gold bags contain 1 dark olive bag, 2 vibrant plum bags.',
      {
        color: 'shiny gold',
        contains: [
          { count: 1, color: 'dark olive' },
          { count: 2, color: 'vibrant plum' },
        ],
      },
    ],
    [
      'faded blue bags contain no other bags.',
      {
        color: 'faded blue',
        contains: [],
      },
    ],
    [
      'dotted black bags contain no other bags.',
      {
        color: 'dotted black',
        contains: [],
      },
    ],
  ])('gets bags', (bagDescription, expected) => {
    expect(createBag(bagDescription)).toStrictEqual(expected);
  });

  const bags = [
    {
      color: 'light red',
      contains: [
        { count: 2, color: 'muted yellow' },
        { count: 1, color: 'bright white' },
      ],
    },
    {
      color: 'bright white',
      contains: [{ count: 1, color: 'shiny gold' }],
    },
    {
      color: 'muted yellow',
      contains: [],
    },
  ];
  test.each([
    ['light red', true],
    ['bright white', true],
  ])('does bag hold bag', (bag, result) => {
    expect(doesBagHoldBag(bags, bag, 'shiny gold')).toBe(result);
  });

  const lines = [
    'light red bags contain 1 bright white bag, 2 muted yellow bags.',
    'dark orange bags contain 3 bright white bags, 4 muted yellow bags.',
    'bright white bags contain 1 shiny gold bag.',
    'muted yellow bags contain 2 shiny gold bags, 9 faded blue bags.',
    'shiny gold bags contain 1 dark olive bag, 2 vibrant plum bags.',
    'dark olive bags contain 3 faded blue bags, 4 dotted black bags.',
    'vibrant plum bags contain 5 faded blue bags, 6 dotted black bags.',
    'faded blue bags contain no other bags.',
    'dotted black bags contain no other bags.',
  ];

  test('finds bag', () => {
    const bags = getBags(lines);

    expect(findBag(bags, 'shiny gold')).toStrictEqual([
      'light red',
      'dark orange',
      'bright white',
      'muted yellow',
    ]);
  });

  test('part 1', () => {
    expect(part1(lines, 'shiny gold')).toBe(4);
  });
});
