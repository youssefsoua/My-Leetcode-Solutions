function isReachableAtTime(
    sx: number,   // The x-coordinate of the starting point
    sy: number,   // The y-coordinate of the starting point
    fx: number,   // The x-coordinate of the target point
    fy: number,   // The y-coordinate of the target point
    t: number,    // The time available to reach the target point
): boolean {
    // Calculate the absolute difference in x and y coordinates between the two points.
    const x = Math.abs(sx - fx);
    const y = Math.abs(sy - fy);

    // Check if the starting and target points are the same, and the time available is not 1.
    // If they are the same, it's considered reachable as long as 't' is not exactly 1.
    if (!x && !y && t !== 1) return true;

    // Check if either 't' is zero and the distance in coordinates (x + y) is non-zero,
    // or both x and y distances are zero, and 't' is less than or equal to 1.
    // In both cases, the target is not reachable, and the function returns false.
    if ((!t && x + y) || (!x && !y && t <= 1)) return false;

    // Calculate the minimum distance between the two points along either the x or y axis.
    const minDistance = x > y ? x : y;

    // Check if the minimum distance is less than or equal to the available time 't'.
    // If it is, the target is reachable, and the function returns true.
    return minDistance <= t;
}
