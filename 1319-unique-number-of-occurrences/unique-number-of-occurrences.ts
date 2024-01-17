function uniqueOccurrences(arr: number[]): boolean {
    const counter = new Map<number, number>();
    const unique = new Set<number>();

    for (const item of arr) {
        counter.set(item, (counter.get(item) || 0) + 1);
    }

    for (const count of counter.values()) {
        if (unique.has(count)) return false;
        unique.add(count);
    }

    return true;
};