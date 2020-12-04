import printParts from "../util/printParts";

export function getMatrix(lines) {
  return lines.map((l) => l.split("").map((c) => (c === "." ? 0 : 1)));
}

export function getPosition(matrix, [x, y]) {
  const rowWidth = matrix[0].length;
  const adjustedX = x % rowWidth;
  try {
    const position = matrix[y][adjustedX];
    return position;
  } catch (err) {
    return null;
  }
}

function add([x1, y1], [x2, y2]) {
  return [x1 + x2, y1 + y2];
}

export function hitsInSlope(matrix, slope) {
  let pos = [0, 0];

  return matrix.reduce((a, c, i, array) => {
    pos = add(pos, slope);
    return getPosition(array, pos) ? a + 1 : a;
  }, 0);
}

export function part1(lines) {
  const matrix = getMatrix(lines);
  return hitsInSlope(matrix, [3, 1]);
}

export function part2(lines) {
  const matrix = getMatrix(lines);
  const slopes = [
    [1, 1],
    [3, 1],
    [5, 1],
    [7, 1],
    [1, 2],
  ];

  return slopes.reduce((a, c) => {
    return hitsInSlope(matrix, c) * a;
  }, 1);
}

export default function day2(lines) {
  return printParts(part1(lines), part2(lines));
}
