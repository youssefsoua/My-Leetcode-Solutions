function canCompleteCircuit(gas, cost) {
    const n = gas.length;
    
    for (let start = 0; start < n;) {
        let tank = 0;
        let count = 0;
        let current = start;

        while (count < n) {
            tank += gas[current] - cost[current];
            
            if (tank < 0) {
                if (start > current) return -1;
                start = current + 1;
                break;
            }

            current = (current + 1) % n;
            count++;

            if (count === n) return start; // If we have traveled through all stations, return the starting index.
        }
    }

    return -1; // If no starting station is found, return -1.
}




/*
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
*/