import printParts from '../util/printParts';
export function getPassports(lines) {
  const result = [];

  lines.reduce((a, c, i, arr) => {
    if (c.trim() === '') {
      result.push(a);
      return [];
    }

    const newVal = [...a, c];

    if (i === arr.length - 1) result.push(newVal);
    return newVal;
  }, []);

  return result;
}

export function getFields(passport) {
  return passport
    .join(' ')
    .split(/[\s]+/)
    .reduce((a, c) => {
      const [key, value] = c.split(':');
      return { ...a, [key]: value };
    }, {});
}

export function hasRequiredFields(requiredFields, passport) {
  return requiredFields.map((f) => passport[f] !== undefined).every(Boolean);
}

export function part1(lines) {
  const required = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];
  return getPassports(lines)
    .map((p) => hasRequiredFields(required, getFields(p)))
    .filter(Boolean).length;
}

export function year(min, max, val) {
  const int = parseInt(val);
  return int >= min && int <= max;
}

export function height(val) {
  const type = val.slice(-2);
  const value = parseInt(val.slice(0, 3));
  if (type === 'cm') return value >= 150 && value <= 193;
  if (type === 'in') return value >= 59 && value <= 76;

  return false;
}

export function hairColor(val) {
  return /#[\da-f]{6}/.test(val);
}

export function eyeColor(val) {
  return ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].includes(val);
}

export function pid(val) {
  return /^\d{9}$/.test(val);
}

const testMap = {
  hcl: hairColor,
  iyr: (val) => year(2010, 2020, val),
  eyr: (val) => year(2020, 2030, val),
  byr: (val) => year(1920, 2002, val),
  ecl: eyeColor,
  pid: pid,
  hgt: height,
  cid: () => true,
};

function testPass(fields) {
  return Object.entries(fields)
    .map(([k, v]) => testMap[k](v))
    .every(Boolean);
}

function test(pass) {
  const required = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];
  const fields = getFields(pass);
  return hasRequiredFields(required, fields) && testPass(fields);
}

export function part2(lines) {
  return getPassports(lines).map(test).filter(Boolean).length;
}

export default function day4(lines) {
  return printParts(part1(lines), part2(lines));
}
