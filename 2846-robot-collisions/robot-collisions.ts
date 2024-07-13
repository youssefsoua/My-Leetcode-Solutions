function survivedRobotsHealths(positions: number[], healths: number[], directions: string): number[] {
    const n = positions.length;
    const robots = [];
    const stack = []

    for (let i = 0; i < n; i++) {
        robots.push({ p: positions[i], h: healths[i], d: directions[i], i });
    }

    robots.sort((a, b) => a.p - b.p);

    for (let i = 0; i < n; i++) {
        while (stack.length && stack[stack.length - 1].d === "R" && robots[i].d === "L") {
            if (stack[stack.length - 1].h > robots[i].h) {
                stack[stack.length - 1].h--;
                robots[i].h = 0;
                break;
            } else if (stack[stack.length - 1].h === robots[i].h) {
                stack.pop();
                robots[i].h = 0;
                break;
            } else {
                stack.pop();
                robots[i].h--;
            }
        }

        if (robots[i].h > 0) {
            stack.push(robots[i]);
        }
    }

    return stack.sort((a, b) => a.i - b.i).map(e => e.h);
}
