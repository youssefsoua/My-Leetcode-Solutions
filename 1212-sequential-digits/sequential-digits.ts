function sequentialDigits(low: number, high: number): number[] {
    const nums = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
    const n: number = nums.length
    const result: number[] = []
    for (let i = 0; i < n; i++) {
        let num: string = nums[i]
        for (let j = i + 1; j < n; j++) {
            num += nums[j]
            const sequence: number = parseInt(num)
            if (sequence >= low && sequence <= high) result.push(sequence)
        }
    }
    return result.sort((a, b) => a - b)
};