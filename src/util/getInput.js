import fs from "fs";
import path from "path";

export default function getInput(day) {
  return fs
    .readFileSync(`${__dirname}/../../input/day${day}.txt`)
    .toString()
    .split("\n");
}
