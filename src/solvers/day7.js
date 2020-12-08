// bag: { color: '', contains: [ { count: 1, color: 'bright white' }, ] }

export function createBag(line) {
  const ruleParts = line.split(' bags contain ');
  const bag = { color: ruleParts[0], contains: [] };
  if (ruleParts[1].trim() !== 'no other bags.') {
    bag.contains = ruleParts[1].split(', ').map((p) => {
      const count = parseInt(p[0]);
      const color = p.slice(2).replace(/ bags| bag|\./g, '');
      return { count, color };
    });
  }

  return bag;
}

export function getBags(lines) {
  return lines.map(createBag);
}

export function doesBagHoldBag(bags, bag, target) {
  const firstBag = bags.find((b) => b.color === bag);

  function search(searchBag, target) {
    // console.log(bag, searchBag);
    if (searchBag.contains.some((b) => b.color === target)) return true;

    for (let b = 0; b < searchBag.contains.length; b += 1) {
      let nextBag = bags.find((x) => x.color === searchBag.contains[b].color);
      if (!nextBag) continue;
      if (search(nextBag, target)) return true;
    }

    return false;
  }

  console.log('searching: ', bag, firstBag);
  return search(firstBag, target);
}

export function findBag(bags, targetBag) {
  console.log('BAGS: ', bags);
  return bags
    .filter((b) => doesBagHoldBag(bags, b.color, targetBag))
    .map((b) => b.color);
}
