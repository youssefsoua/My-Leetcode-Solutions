function merge(intervals: number[][]): number[][] {
    intervals.sort((a, b) => a[0] - b[0]);

    const newIntervals: number[][] = [];

    let current = intervals[0];

    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] <= current[1]) {
            current[1] = Math.max(intervals[i][1], current[1]);
        } else {
            newIntervals.push(current);
            current = intervals[i];
        }
    }

    newIntervals.push(current);
    return newIntervals;
}
