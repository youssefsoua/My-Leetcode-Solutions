function findJudge(n: number, trust: number[][]): number {
    if (n === 1 && trust.length === 0) return 1;
    
    const trustersList = new Map<number, number[]>();
    const trustedList = new Map<number, number[]>();

    for (const e of trust) {
        const truster = trustersList.get(e[0]);
        const trusted = trustedList.get(e[1]);

        if (!truster) trustersList.set(e[0], [e[1]]);
        else truster.push(e[1]);

        if (!trusted) trustedList.set(e[1], [e[0]]);
        else trusted.push(e[0]);

    }

    for (let i = 1; i <= n; i++) {
        const truster = trustersList.get(i);
        const trusted = trustedList.get(i);
        if (!truster && trusted && trusted.length === n - 1) return i;
    }

    return -1;
};