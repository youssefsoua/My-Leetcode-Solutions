function averageWaitingTime(customers: number[][]): number {
    const n = customers.length;
    let sum = 0;
    let prev = 0;

    for (let i = 0; i < n; i++) {
        if (prev > customers[i][0]) {
            let current = prev - customers[i][0] + customers[i][1];
            sum += current;
            prev = customers[i][0] + current;
        } else {
            sum += customers[i][1];
            prev = customers[i][0] + customers[i][1];
        }
    }

    return sum / n;
};