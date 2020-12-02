export default function printParts(...parts) {
  return parts.reduce((a, c, i) => {
    return a + `Part ${i + 1}: ${c}\n`;
  }, "");
}
