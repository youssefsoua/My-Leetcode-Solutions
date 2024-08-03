function canBeEqual(target: number[], arr: number[]): boolean {
    const map = new Map<number, number>();

    for (const e of arr) {
        map.set(e, (map.get(e) ?? 0) + 1);
    }

    for (const e of target) {
        const exist = map.get(e);

        if (!exist) return false;

        if (exist === 1) map.delete(e);
        else map.set(e, exist - 1);
    }

    return map.size === 0;
};