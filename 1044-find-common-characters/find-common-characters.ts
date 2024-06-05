function commonChars(words: string[]): string[] {
    const map = new Map<string, number>();
    const result: string[] = [];

    for (const s of words[0]) {
        map.set(s, (map.get(s) || 0) + 1);
    }

    for (let i = 1; i < words.length; i++) {
        const currentMap = new Map<string, number>();

        for (const s of words[i]) {
            currentMap.set(s, (currentMap.get(s) || 0) + 1);
        }

        for (const e of map.keys()) {
            const exist = currentMap.get(e) || 0;
            if (!exist) map.delete(e);
            else map.set(e, Math.min(exist, map.get(e)));
        }
    }

    for (const e of map.entries()) {
        let i = 0;
        while (i < e[1]) {
            result.push(e[0]);
            i++;
        }
    }

    return result;
};