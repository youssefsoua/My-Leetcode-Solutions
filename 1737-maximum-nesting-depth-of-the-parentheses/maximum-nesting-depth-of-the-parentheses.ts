function maxDepth(s: string): number {
    let max: number = 0;
    let depth: number = 0;

    for (const e of s) {
        if (e === "(") {
            depth++;
            max = Math.max(max, depth);
        }
        
        if (e === ")") {
            depth--;
        }
    }
    return max;
};