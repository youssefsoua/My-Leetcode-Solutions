function largestGoodInteger(num: string): string {
    let result: string = "";
    let count: number = 1;

    for (let i = 1; i < num.length; i++) {
        if (num[i] === num[i - 1]) count++;
        else count = 1;

        if (count === 3) {
            if (!result) result = num[i];
            else if (num[i] > result) result = num[i];
        }
    }

    return result.repeat(3);
}
