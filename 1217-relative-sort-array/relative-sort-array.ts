function relativeSortArray(arr1: number[], arr2: number[]): number[] {
    const map = new Map<number, number>();

    for (let i = 0; i < arr2.length; i++) {
        map.set(arr2[i], i);
    }

    arr1.sort((a, b) => {
        const existA = map.has(a);
        const existB = map.has(b);

        if (existA && existB) return map.get(a) - map.get(b);

        if (!existA && existB) return 1;

        if (existA && !existB) return -1;

        return a - b;
    })

    return arr1;
};