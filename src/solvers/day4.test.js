import {
  getPassports,
  getFields,
  hasRequiredFields,
  part1,
  part2,
  year,
  height,
  hairColor,
  eyeColor,
  pid,
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

  test.each([
    ['2002', true],
    ['2003', false],
  ])('year', (val, result) => {
    expect(year(1920, 2002, val)).toBe(result);
  });

  test.each([
    ['60in', true],
    ['190cm', true],
    ['190in', false],
    ['190', false],
  ])('height', (val, result) => {
    expect(height(val)).toBe(result);
  });

  test.each([
    ['#123abc', true],
    ['#123abz', false],
    ['123abc', false],
  ])('hair color', (val, result) => {
    expect(hairColor(val)).toBe(result);
  });

  test.each([
    ['brn', true],
    ['wat', false],
  ])('eye color', (val, result) => {
    expect(eyeColor(val)).toBe(result);
  });

  test.each([
    ['000000001', true],
    ['0123456789', false],
  ])('pid', (val, result) => {
    expect(pid(val)).toBe(result);
  });

  test('part 2 invalid', () => {
    const lines = [
      'eyr:1972 cid:100',
      'hcl:#18171d ecl:amb hgt:170 pid:186cm iyr:2018 byr:1926',
      '',
      'iyr:2019',
      'hcl:#602927 eyr:1967 hgt:170cm',
      'ecl:grn pid:012533040 byr:1946',
      '',
      'hcl:dab227 iyr:2012',
      'ecl:brn hgt:182cm pid:021572410 eyr:2020 byr:1992 cid:277',
      '',
      'hgt:59cm ecl:zzz',
      'eyr:2038 hcl:74454a iyr:2023',
      'pid:3556412378 byr:2007',
    ];

    expect(part2(lines)).toBe(0);
  });

  test('part 2 valid', () => {
    const lines = [
      'pid:087499704 hgt:74in ecl:grn iyr:2012 eyr:2030 byr:1980',
      'hcl:#623a2f',
      '',
      'eyr:2029 ecl:blu cid:129 byr:1989',
      'iyr:2014 pid:896056539 hcl:#a97842 hgt:165cm',
      '',
      'hcl:#888785',
      'hgt:164cm byr:2001 iyr:2015 cid:88',
      'pid:545766238 ecl:hzl',
      'eyr:2022',
      '',
      'iyr:2010 hgt:158cm hcl:#b6652a ecl:blu byr:1944 eyr:2021 pid:093154719',
    ];

    expect(part2(lines)).toBe(4);
  });
});
