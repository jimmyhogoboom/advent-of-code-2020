import getLineGroups from '../util/getLineGroups';
import printParts from '../util/printParts';

export function getUniqueAnswers(answers) {
  return [...new Set(answers.flatMap((a) => a.split('')))];
}

export function getSharedAnswers(answers) {}

export function part1(lines) {
  return getLineGroups(lines)
    .map((l) => getUniqueAnswers(l).length)
    .reduce((a, c) => a + c, 0);
}

export function part2(lines) {}

export default function day6(lines) {
  return printParts(part1(lines), part2(lines));
}
