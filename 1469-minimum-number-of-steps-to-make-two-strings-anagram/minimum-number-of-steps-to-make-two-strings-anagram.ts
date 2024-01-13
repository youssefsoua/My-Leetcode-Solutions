function minSteps(s: string, t: string): number {
    const counter = new Map<string, number>();

    for (let i = 0; i < s.length; i++) {
        counter.set(s[i], (counter.get(s[i]) || 0) + 1);
        counter.set(t[i], (counter.get(t[i]) || 0) - 1);
    }
    let count: number = 0;

    for (const e of counter.values()) {
        if (e > 0) count += e;
    }

    return count;

};
