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

export function part2(lines) {}

export default function day4(lines) {
  return printParts(part1(lines), part2(lines));
}
