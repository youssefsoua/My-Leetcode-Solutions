function maxProductDifference(nums: number[]): number {
    let biggest = 0;
    let secondBiggest = 0;
    let smallest = Infinity;
    let secondSmallest = Infinity;

    for (const num of nums) {
        if (num > biggest) {
            secondBiggest = biggest;
            biggest = num;
        } else if (num > secondBiggest) {
            secondBiggest = num;
        }

        if (num < smallest) {
            secondSmallest = smallest;
            smallest = num;
        } else if (num < secondSmallest) {
            secondSmallest = num;
        }
    }

    return biggest * secondBiggest - smallest * secondSmallest;
}
