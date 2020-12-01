import fs from "fs";

export default function setOutput(day, result) {
  fs.writeFileSync(`${__dirname}/../../output/day${day}.txt`, result);
  console.log(`Day ${day}:\n${result}\n`);
}
