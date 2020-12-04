import {
  getPassports,
  getFields,
  hasRequiredFields,
  part1,
  part2,
} from './day4';

describe('day 4', () => {
  const testData = [
    'ecl:gry pid:860033327 eyr:2020 hcl:#fffffd',
    'byr:1937 iyr:2017 cid:147 hgt:183cm',
    ' ',
    'iyr:2013 ecl:amb cid:350 eyr:2023 pid:028048884',
    'hcl:#cfa07d byr:1929',
    ' ',
    'hcl:#ae17e1 iyr:2013',
    'eyr:2024',
    'ecl:brn pid:760753108 byr:1931',
    'hgt:179cm',
    ' ',
    'hcl:#cfa07d eyr:2025 pid:166559648',
    'iyr:2011 ecl:brn hgt:59in',
  ];
  test('get passports', () => {
    expect(getPassports(testData)).toStrictEqual([
      [
        'ecl:gry pid:860033327 eyr:2020 hcl:#fffffd',
        'byr:1937 iyr:2017 cid:147 hgt:183cm',
      ],
      [
        'iyr:2013 ecl:amb cid:350 eyr:2023 pid:028048884',
        'hcl:#cfa07d byr:1929',
      ],
      [
        'hcl:#ae17e1 iyr:2013',
        'eyr:2024',
        'ecl:brn pid:760753108 byr:1931',
        'hgt:179cm',
      ],
      ['hcl:#cfa07d eyr:2025 pid:166559648', 'iyr:2011 ecl:brn hgt:59in'],
    ]);
  });

  test('get fields', () => {
    const pass = [
      'ecl:gry pid:860033327 eyr:2020 hcl:#fffffd',
      'byr:1937 iyr:2017 cid:147 hgt:183cm',
    ];
    expect(getFields(pass)).toStrictEqual({
      ecl: 'gry',
      pid: '860033327',
      eyr: '2020',
      hcl: '#fffffd',
      byr: '1937',
      iyr: '2017',
      cid: '147',
      hgt: '183cm',
    });
  });

  test.each([
    [
      ['ecl', 'pid'],
      {
        ecl: 'gry',
        pid: '8600',
      },
      true,
    ],
    [
      ['ecl', 'pid'],
      {
        ecl: 'gry',
        pid: '8600',
        hgt: '183cm',
      },
      true,
    ],
    [
      ['ecl', 'pid', 'hgt'],
      {
        ecl: 'gry',
        pid: '8600',
      },
      false,
    ],
    [
      ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'],
      {
        hcl: '#ae17e1',
        iyr: '2013',
        eyr: '2024',
        ecl: 'brn',
        pid: '760753108',
        byr: '1931',
        hgt: '179cm',
      },
      true,
    ],
  ])('validate passport', (req, pass, isValid) => {
    expect(hasRequiredFields(req, pass)).toBe(isValid);
  });

  test.each([
    [
      [
        'ecl:gry pid:860033327 eyr:2020 hcl:#fffffd',
        'byr:1937 iyr:2017 cid:147 hgt:183cm',
      ],
      1,
    ],
    [
      [
        'iyr:2013 ecl:amb cid:350 eyr:2023 pid:028048884',
        'hcl:#cfa07d byr:1929',
      ],
      0,
    ],
    [
      [
        'hcl:#ae17e1 iyr:2013',
        'eyr:2024',
        'ecl:brn pid:760753108 byr:1931',
        'hgt:179cm',
      ],
      1,
    ],
  ])('part 1', (pass, count) => {
    expect(part1(pass)).toBe(count);
  });
});
