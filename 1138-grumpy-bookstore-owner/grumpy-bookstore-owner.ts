function maxSatisfied(customers: number[], grumpy: number[], minutes: number): number {
    const n = customers.length;
    let max = 0;

    let start = 0;
    let end = 0;

    let j = 0;
    let sum = 0;

    // Sliding window to find the interval with maximum potential gain
    for (let i = 0; i < n; i++) {
        if (grumpy[i] === 1) {
            sum += customers[i];
        }

        if (i - j + 1 === minutes) {
            if (max < sum) {
                start = j;
                end = i;
                max = sum;
            }
            if (grumpy[j] === 1) {
                sum -= customers[j];
            }
            j++;
        }
    }

    // Calculate total satisfied customers considering the best interval found
    let totalSatisfied = 0;
    for (let i = 0; i < n; i++) {
        if (!grumpy[i] || (i >= start && i <= end)) {
            totalSatisfied += customers[i];
        }
    }

    return totalSatisfied;
}
