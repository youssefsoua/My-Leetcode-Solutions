function combinationSum(candidates: number[], target: number): number[][] {
  const results: number[][] = [];

  const combinations = (
    target: number,
    list: number[],
    index: number,
  ): void => {
    if (target === 0) results.push([...list]);

    for (let i = index; i < candidates.length; i++) {
      const newTarget = target - candidates[i];

      if (newTarget >= 0) {
        list.push(candidates[i]);
        combinations(newTarget, list, i);
        list.pop();
      }
    }
  };

  combinations(target, [], 0);

  return results;
}
