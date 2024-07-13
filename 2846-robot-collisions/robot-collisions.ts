function survivedRobotsHealths(positions: number[], healths: number[], directions: string): number[] {
    const n = positions.length;
    const robots = [];
    const stack = [];

    // Create an array of robots with their position, health, direction, and original index
    for (let i = 0; i < n; i++) {
        robots.push({ p: positions[i], h: healths[i], d: directions[i], i });
    }

    // Sort robots based on their positions
    robots.sort((a, b) => a.p - b.p);

    // Process each robot
    for (let i = 0; i < n; i++) {
        let robot = robots[i];
        // Handle collisions with robots in the stack
        while (stack.length && stack[stack.length - 1].d === "R" && robot.d === "L") {
            let top = stack[stack.length - 1];
            if (top.h > robot.h) {
                // Robot in the stack has more health, decrease its health and destroy the current robot
                top.h--;
                robot.h = 0;
                break;
            } else if (top.h < robot.h) {
                // Robot in the stack has less health, remove it and decrease the current robot's health
                stack.pop();
                robot.h--;
            } else {
                // Both robots have the same health, destroy both
                stack.pop();
                robot.h = 0;
                break;
            }
        }
        // If the current robot survived, push it to the stack
        if (robot.h > 0) {
            stack.push(robot);
        }
    }

    // Sort the surviving robots back to their original indices and map to their healths
    return stack.sort((a, b) => a.i - b.i).map(e => e.h);
}
