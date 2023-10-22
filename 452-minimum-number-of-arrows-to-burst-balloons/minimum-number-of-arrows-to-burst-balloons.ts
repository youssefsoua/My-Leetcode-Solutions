function findMinArrowShots(points: number[][]): number {
    const n = points.length;

    if (n === 1) return n;

    points.sort((a, b) => a[1] - b[1]);

    let count = n;
    let pointer = 0;

    for (let i = 1; i < n; i++) {
        if (points[pointer][1] >= points[i][0]) count--;
        else pointer = i;
    }

    return count;
}


/**

function findMinArrowShots(points: number[][]): number {
    points.sort((a, b) => a[1] - b[1]); // Sort by end points

    let count = 1; // Initialize with one arrow
    let end = points[0][1]; // Initialize end with the first balloon's end

    for (let i = 1; i < points.length; i++) {
        if (points[i][0] > end) {
            // If the next balloon's start is greater than the current end,
            // it requires a new arrow
            count++;
            end = points[i][1]; // Update the end
        }
    }

    return count;
}

 */