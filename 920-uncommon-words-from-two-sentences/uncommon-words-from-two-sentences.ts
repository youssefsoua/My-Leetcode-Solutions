function uncommonFromSentences(s1: string, s2: string): string[] {
    const map = new Map();
    const result = [];

    for (const w of s1.split(' ')) {
        map.set(w, (map.get(w) || 0) + 1);
    }

    for (const w of s2.split(' ')) {
        map.set(w, (map.get(w) || 0) + 1);
    }

    for (const e of map.entries()) {
        if (e[1] === 1) result.push(e[0]);
    }

    return result;

};