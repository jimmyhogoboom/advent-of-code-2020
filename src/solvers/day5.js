import printParts from '../util/printParts';

const maxRows = 128;
const maxColumns = 8;
const lower = ['F', 'L'];
const upper = ['B', 'R'];

export function splitRow(min, max, dir) {
  const range = max - min;

  const newMin = lower.includes(dir) ? min : Math.ceil(range / 2) + min;

  const newMax = upper.includes(dir) ? max : Math.floor(range / 2) + min;

  return newMin === newMax ? newMin : [newMin, newMax];
}

export function getSeatId(row, column) {
  return row * maxColumns + column;
}

export function getSeat(code) {
  function getPosition(codePart, [min, max]) {
    const newPos = splitRow(min, max, codePart[0]);
    if (!Array.isArray(newPos)) return newPos;
    return getPosition(codePart.slice(1, codePart.length), newPos);
  }

  const matches = code.match(/([BF]*)([LR]+)/);

  const rows = matches[1];
  const columns = matches[2];

  const row = getPosition(rows, [0, maxRows - 1]);
  const column = getPosition(columns, [0, maxColumns - 1]);

  return [row, column];
}

export function part1(lines) {
  return Math.max(...lines.map((l) => getSeatId(...getSeat(l))));
}

export function part2() {}

export default function day5(lines) {
  const cleanedLines = lines.filter(Boolean);
  return printParts(part1(cleanedLines), part2(cleanedLines));
}
