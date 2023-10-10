function canCompleteCircuit(gas: number[], cost: number[]): number {
    let sumCost = cost.reduce((partialSum, a) => partialSum + a, 0);
    let sumGas = gas.reduce((partialSum, a) => partialSum + a, 0);

    if (sumCost > sumGas) {
        return -1;
    }

    let startIndex = 0;
    let totalGas = 0;

    for (let i = 0; i < gas.length; i++) {
        totalGas = totalGas + (gas[i] - cost[i]);

        if (totalGas < 0) {
            totalGas = 0;
            startIndex = i + 1;
        }
    }

    return startIndex;
}
