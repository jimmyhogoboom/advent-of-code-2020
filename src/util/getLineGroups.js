export default function getGroupAnswers(lines) {
  const result = [];

  lines.reduce((a, c, i, arr) => {
    if (c.trim() === '') {
      result.push(a);
      return [];
    }

    const newVal = [...a, c];

    if (i === arr.length - 1) result.push(newVal);
    return newVal;
  }, []);

  return result;
}
