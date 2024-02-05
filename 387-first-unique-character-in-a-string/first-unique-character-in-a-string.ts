function firstUniqChar(s: string): number {
    const counter = new Map<string, number>();

    for (const char of s) {
        counter.set(char, (counter.get(char) || 0) + 1);
    }

    for (let i = 0; i < s.length; i++) {
        const count = counter.get(s[i]);
        if (count === 1) return i;
    }

    return -1;
};