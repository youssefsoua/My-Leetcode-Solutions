function appendCharacters(s: string, t: string): number {
    const n = s.length;
    const l = t.length;

    let j = 0;

    for (let i = 0; i < n; i++) {
        if (s[i] === t[j]) j++;
        if (j === l) return 0;
    }

    return l - j;
};