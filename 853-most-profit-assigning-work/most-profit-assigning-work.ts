function maxProfitAssignment(difficulty: number[], profit: number[], worker: number[]): number {
    const n = profit.length;
    const m = worker.length;
    const entries: number[][] = [];
    let result = 0;

    // Create entries with difficulty and profit pairs
    for (let i = 0; i < n; i++) {
        entries.push([difficulty[i], profit[i]]);
    }

    // Sort entries by difficulty, and if same difficulty, by profit (though not necessary here)
    entries.sort((a, b) => a[0] - b[0]);

    // Adjust profits to be non-decreasing with increasing difficulty
    for (let i = 1; i < n; i++) {
        entries[i][1] = Math.max(entries[i][1], entries[i - 1][1]);
    }

    // Sort workers in ascending order to use a two-pointer technique
    worker.sort((a, b) => a - b);

    let i = 0;
    
    for (const ability of worker) {
        // Move the pointer in the entries array to find the best job the worker can do
        while (i < n && ability >= entries[i][0]) {
            i++;
        }
        // The best job the worker can do is the last valid job before the worker's ability exceeds the difficulty
        if (i > 0) {
            result += entries[i - 1][1];
        }
    }

    return result;
}