const ranks = {
    1: "Gold Medal",
    2: "Silver Medal",
    3: "Bronze Medal"
}

function findRelativeRanks(score: number[]): string[] {
    const n = score.length;
    const result: string[] = new Array(n);

    const sorted = score.map((e, i) => [e, i]).sort((a, b) => b[0] - a[0]);

    for (let i = 0; i < n; i++) {
        const rank = i + 1;
        if (rank in ranks) {
            result[sorted[i][1]] = ranks[rank];
        } else {
            result[sorted[i][1]] = rank.toString();
        }
    }

    return result;
};