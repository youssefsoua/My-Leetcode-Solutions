function countNicePairs(nums: number[]): number {
    const reverseNumber = (num: number): number => {
    let strNum: string = '';

    // Extract digits in reverse order from the input number.
    while (num > 0) {
        strNum += num % 10;
        num = Math.floor(num / 10);
    }

    // Convert the reversed string back to a number.
    return +strNum;
    
    };

    // Constant representing the modulo value.
    const MOD = 10 ** 9 + 7;

    // Variable to store the count of nice pairs.
    let nicePairs: number = 0;

    // Map to store the frequency of differences (nums[i] - reverse(nums[i])).
    const map = new Map<number, number>();

    // Iterate through the array of numbers.
    for (let i = 0; i < nums.length; i++) {
        // Calculate the difference between the number and its reverse.
        const diff = nums[i] - reverseNumber(nums[i]);

        // Retrieve the frequency of the current difference from the map.
        const freq = map.get(diff) || 0;

        // Update the count of nice pairs and store the frequency in the map.
        nicePairs = (nicePairs + freq) % MOD;
        map.set(diff, freq + 1);
    }

    // Return the final count of nice pairs.
    return nicePairs;
}

/*
function countNicePairs(nums: number[]): number {
    const counter = new Map();
    const memo = new Map();

    const factorial = (n: number): number => {
        if (n === 0 || n === 1) return 1;
        if (memo.has(n)) return memo.get(n);

        const result = n * factorial(n - 1);
        memo.set(n, result);
        return result;
    };

    const revesreNumber = (num: number): number => {
        if (num < 10) return num;
        const numAsString = num.toString();
        let reversedNum = "";

        for (let i = numAsString.length - 1; i >= 0; i--) {
            reversedNum += numAsString[i];
        }

        return parseInt(reversedNum,10);
    };

    for (const num of nums) {
        const number = num - revesreNumber(num);
        counter.set(number, (counter.get(number) || 0) + 1);
    }

    let result = 0;

    for (const count of counter.values()) {
        if(count>2){
           result += factorial(count) / (factorial(2) * factorial(count - 2)); 
        }

        if(count === 2){
           result++; 
        }        
    }

    return result;
}
*/