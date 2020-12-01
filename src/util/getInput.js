import fs from "fs";

export default function getInput(day) {
  return fs
    .readFileSync(`${__dirname}/../../input/day${day}.txt`)
    .toString()
    .split("\n");
}
