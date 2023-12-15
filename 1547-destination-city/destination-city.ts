function destCity(paths: string[][]): string {
    const pathsMap = new Map<string, string>();

    for (const path of paths) {
        pathsMap.set(path[0], path[1]);
    }

    for (const path of paths) {
        const dir: string = pathsMap.get(path[0]);
        if (!pathsMap.has(dir)) return dir;
    }
}
