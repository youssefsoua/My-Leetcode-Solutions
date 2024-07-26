function isAnagram(s: string, t: string): boolean {
    const map = new Map<string, number>();

    for (const e of s) {
        map.set(e, (map.get(e) ?? 0) + 1);
    }

    for (const e of t) {
        const exist = map.get(e);

        if (!exist) return false;

        if (exist === 1) map.delete(e);
        else map.set(e, exist - 1);
    }

    return map.size === 0;
};