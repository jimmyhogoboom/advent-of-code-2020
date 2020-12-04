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

export function part1(lines) {
  const matrix = getMatrix(lines);
  let pos = [0, 0];

  return matrix.reduce((a, c, i, array) => {
    pos = add(pos, [3, 1]);
    return getPosition(array, pos) ? a + 1 : a;
  }, 0);
}

export function part2(lines) {}

export default function day2(lines) {
  return printParts(part1(lines), part2(lines));
}
