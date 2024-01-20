function sumSubarrayMins(arr: number[]): number {
    const MOD = 1000000007;
    const stack: number[] = [];
    let sum = 0;

    for (let i = 0; i <= arr.length; i++) {
        while (stack.length > 0 && (i === arr.length || arr[i] < arr[stack[stack.length - 1]])) {
            const index = stack.pop()!;
            const min = arr[index];
            sum = (sum + min * (i - index) * (index - (stack.length > 0 ? stack[stack.length - 1] : -1))) % MOD;
        }

        stack.push(i);
    }

    return sum;
}

/*

function sumSubarrayMins(arr: number[]): number {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        let min = arr[i];
        for (let j = i; j < arr.length; j++) {
            min = Math.min(min, arr[j]);
            sum += min;
        }
    }
    return sum % 1000000007
};

*/