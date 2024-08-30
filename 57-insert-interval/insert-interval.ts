function insert(intervals: number[][], newInterval: number[]): number[][] {
    const sortedIntervals = [...intervals, newInterval].sort((a, b) => a[0] - b[0]);

    const mergedIntervals = [];
    let [start, end] = sortedIntervals[0];

    for (let i = 1; i < sortedIntervals.length; i++) {
        const [nextStart, nextEnd] = sortedIntervals[i];

        if (end >= nextStart) {
            end = Math.max(end, nextEnd);
        } else {
            mergedIntervals.push([start, end]);
            start = nextStart;
            end = nextEnd;
        }
    }

    mergedIntervals.push([start, end]);

    return mergedIntervals;
}