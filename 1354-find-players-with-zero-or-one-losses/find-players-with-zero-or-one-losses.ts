function findWinners(matches: number[][]): number[][] {
    const winners = new Set<number>();
    const losersCount = new Map<number, number>();
    const losers: number[] = [];
    
    for (let i = 0; i < matches.length; i++) {
        losersCount.set(matches[i][1], (losersCount.get(matches[i][1]) || 0) + 1);
        winners.add(matches[i][0]);
    }

    for (const loserCount of losersCount.entries()) {
        if (winners.has(loserCount[0])) {
            winners.delete(loserCount[0]);
        }
        if (loserCount[1] === 1) losers.push(loserCount[0]);
    }

    return [Array.from(winners).sort((a, b) => a - b), losers.sort((a, b) => a - b)];
};