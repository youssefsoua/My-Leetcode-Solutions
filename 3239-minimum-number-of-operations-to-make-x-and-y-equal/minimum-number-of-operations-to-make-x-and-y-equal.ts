function minimumOperationsToMakeEqual(x: number, y: number, memo = new Map<number, number>()): number {
    // If the value is already computed, return it
    if (memo.has(x)) return memo.get(x);
    // If x is less than or equal to y, return the difference
    if (x <= y) return y - x;

    let result = Infinity;
    const divisors = [11, 5];

    // Try subtracting 1 from x
    result = Math.min(result, 1 + minimumOperationsToMakeEqual(x - 1, y, memo));

    for (const divisor of divisors) {
        if (x % divisor === 0) {
            // If x is divisible by the divisor, try dividing x by the divisor
            result = Math.min(result, 1 + minimumOperationsToMakeEqual(x / divisor, y, memo));
        } else {
            // If x is not divisible by the divisor, find the nearest multiple of the divisor
            let [ops, val] = nearestMultiple(x, divisor);
            result = Math.min(result, 1 + ops + minimumOperationsToMakeEqual((x + val) / divisor, y, memo));
        }
    }

    // Store the computed value in the memo
    memo.set(x, result);

    return result;
}

function nearestMultiple(x: number, divisor: number): number[] {
    let val: number = 0;
    // Find the nearest multiple of the divisor
    if (x % divisor >= divisor / 2) {
        val = divisor - (x % divisor);
    } else {
        val = -x % divisor;
    }
    // The number of operations is the absolute value of val
    let ops = Math.abs(val);
    return [ops, val];
}
