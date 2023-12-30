function makeEqual(words: string[]): boolean {
    const counter = new Map<string, number>();
    const n: number = words.length;
    let count: number = 0;

    for (const word of words) {
        for (const char of word) {
            count++;
            counter.set(char, (counter.get(char) || 0) + 1);
        }
    }

    if (count % n) return false;

    for (const e of counter.values()) {
        if (e % n) return false;
    }

    return true;
}
