import printParts from "../util/printParts";

export function getMatrix(lines) {
  return lines.map((l) => l.split("").map((c) => (c === "." ? 0 : 1)));
}

export function getPosition(matrix, [x, y]) {
  const rowWidth = matrix[0].length;
  const adjustedX = x % rowWidth;
  return matrix[y][adjustedX];
}

function part1(lines) {}

function part2(lines) {}

export default function day2(lines) {
  return printParts(part1(lines), part2(lines));
}
