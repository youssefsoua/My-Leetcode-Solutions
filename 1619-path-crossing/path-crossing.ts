function isPathCrossing(path: string): boolean {
    const paths = new Set<string>();
    const current: number[] = [0, 0];
    paths.add(`${current[0]}_${current[1]}`);

    for (const p of path) {
        if (p === "N") current[1]++;
        if (p === "S") current[1]--;
        if (p === "E") current[0]++;
        if (p === "W") current[0]--;

        if (paths.has(`${current[0]}_${current[1]}`)) return true;

        paths.add(`${current[0]}_${current[1]}`);
    }

    return false;
}
