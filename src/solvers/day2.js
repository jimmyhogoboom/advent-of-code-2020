import printParts from "../util/printParts";

function getParts(c) {
  const [rangeRaw, letterRaw, password] = c.split(" ");
  const range = rangeRaw.split("-");
  const [letter] = letterRaw.split(":");

  return { letter, range, password };
}

function countValidPasswords(validator, lines) {
  return lines.reduce((a, c) => {
    if (!c) return a;

    const { letter, range, password } = getParts(c);

    const isValid = validator(letter, range, password);
    return isValid ? a + 1 : a;
  }, 0);
}

export function part1(lines) {
  function isPasswordValid(letter, range, pass) {
    const count = pass.split(letter).length - 1;
    const [min, max] = range;
    return count >= min && count <= max;
  }

  return countValidPasswords(isPasswordValid, lines);
}

export function part2(lines) {
  function isPasswordValid(letter, positions, pass) {
    const [p1, p2] = positions;
    const letter1 = pass[p1 - 1];
    const letter2 = pass[p2 - 1];

    const letters = letter1 + letter2;

    const count = letters.split(letter).length - 1;

    return count === 1;
  }

  return countValidPasswords(isPasswordValid, lines);
}

export default function day2(lines) {
  return printParts(part1(lines), part2(lines));
}
