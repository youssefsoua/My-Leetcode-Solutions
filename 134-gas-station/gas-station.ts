function canCompleteCircuit(gas: number[], cost: number[]): number {
    let sumCost: number = cost.reduce((partialSum, a) => partialSum + a, 0);
    let sumGas: number = gas.reduce((partialSum, a) => partialSum + a, 0);

    if (sumCost > sumGas) {
        return -1;
    }

    let startIndex: number = 0;
    let totalGas: number = 0;

    for (let i: number = 0; i < gas.length; i++) {
        totalGas = totalGas + (gas[i] - cost[i]);

        if (totalGas < 0) {
            totalGas = 0;
            startIndex = i + 1;
        }
    }

    return startIndex;
}
