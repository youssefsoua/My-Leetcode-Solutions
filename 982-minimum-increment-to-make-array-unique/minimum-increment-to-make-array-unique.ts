function minIncrementForUnique(nums: number[]): number {
  const map = new Map<number, number>();
  let result = 0;
  const stack: number[] = [];

  for (const num of nums) {
    const count = map.get(num) || 0;
    map.set(num, count + 1);
    if (count === 1) {
      stack.push(num);
    }
  }

  stack.sort((a, b) => b - a);

  while (stack.length) {
    const current = stack.pop()!;
    const count = map.get(current)!;

    if (count > 1) {
      const nextElem = current + 1;
      result += count - 1;
      map.set(current, 1);
      const nextCount = (map.get(nextElem) || 0) + count - 1;

      if (nextCount > 1) {
        map.set(nextElem, nextCount);
        if (!stack.length || nextElem < stack[stack.length - 1]) {
          stack.push(nextElem);
        }
      }
    }
  }

  return result;
}
