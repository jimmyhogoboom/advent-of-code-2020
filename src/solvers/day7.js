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

  function search(bag, target) {
    if (bag.color === target || bag.contains.some((b) => b.color === target))
      return true;

    for (let b = 0; b < bag.contains.length; b += 1) {
      let nextBag = bags.find((x) => x.color === bag.contains[b].color);
      if (search(nextBag, target)) return true;
    }

    return false;
  }

  return search(firstBag, target);
}

export function findBag(bags, targetBag) {
  const finds = [];

  function dive(bag, target) {
    if (bag.color === target) return true;
    if (!bag.contains) return false;

    if (bag.contains.some((b) => dive(b, target))) {
      finds.push(bag.color);
    }
  }

  // dive(bags[0], targetBag);

  function search(bag, target) {
    if (!bag.contains) return;

    if (bag.contains.some((b) => b.color === target)) {
      finds.push(bag.color);
    } else {
      const newBag = (c) => bags.find((b) => c.color === b.color);
      bag.contains.forEach((b) => search(newBag(b), target));
    }
  }

  search({ contains: bags });

  return finds;
}
