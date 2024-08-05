function kthDistinct(arr: string[], k: number): string {
    const map = new Map<string, number>();
    let index = 0;

    for (const e of arr) {
        map.set(e, (map.get(e) ?? 0) + 1);
    }

    for (const e of arr) {
        const count = map.get(e);

        if (count === 1) index++;
        if (index === k && count === 1) return e;

    }

    return "";
};