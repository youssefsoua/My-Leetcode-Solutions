function equalSubstring(s: string, t: string, maxCost: number): number {
    const n = s.length;
    let max = 0;
    let j = 0;
    let cost = 0

    for (let i = 0; i < n; i++) {
        cost += Math.abs(s[i].charCodeAt(0) - t[i].charCodeAt(0));
        
        while (cost > maxCost) {
            cost -= Math.abs(s[j].charCodeAt(0) - t[j].charCodeAt(0));
            j++;
        }

        max = Math.max(max, i - j + 1);
    }

    return max;
};