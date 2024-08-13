function combinationSum2(candidates: number[], target: number): number[][] {
    const result: number[][] = [];

    candidates.sort((a, b) => a - b);

    const backtrack = (path: number[], index: number, sum: number) => {
        if (sum > target) return;
        if (sum === target) {
            result.push([...path]);
            return;
        }

        for (let i = index; i < candidates.length; i++) {
            if (i > index && candidates[i] === candidates[i - 1]) continue;

            path.push(candidates[i]);
            const newSum = sum + candidates[i];
            backtrack(path, i + 1, newSum);
            path.pop();
        }
    }

    backtrack([], 0, 0);
    return result;
};