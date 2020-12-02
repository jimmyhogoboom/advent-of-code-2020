import printParts from "../util/printParts";

function part1(lines) {
  let result = 0;
  for (let x = 0; x < lines.length; x += 1) {
    for (let y = 0; y < lines.length; y += 1) {
      const numX = parseInt(lines[x]);
      const numY = parseInt(lines[y]);
      if (numX + numY === 2020) {
        result = numX * numY;
      }
    }
  }
  return result;
}

function part2(lines) {
  let result = 0;
  for (let x = 0; x < lines.length; x += 1) {
    for (let y = 0; y < lines.length; y += 1) {
      for (let z = 0; z < lines.length; z += 1) {
        const numX = parseInt(lines[x]);
        const numY = parseInt(lines[y]);
        const numZ = parseInt(lines[z]);
        if (numX + numY + numZ === 2020) {
          result = numX * numY * numZ;
        }
      }
    }
  }
  return result;
}

export default function day1(lines) {
  const p1 = part1(lines);
  const p2 = part2(lines);

  return printParts(p1, p2);
}
