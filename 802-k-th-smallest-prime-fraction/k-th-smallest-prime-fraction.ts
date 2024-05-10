interface IFraction {
    firstNum: number,
    secondNum: number,
    frac: number
}

function kthSmallestPrimeFraction(arr: number[], k: number): number[] {
    let fraction: IFraction[] = [];
    let n = arr.length;

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            const frac = arr[i] / arr[j];
            fraction.push({
                firstNum: arr[i],
                secondNum: arr[j],
                frac
            });
        }
    }

    fraction.sort((a: IFraction, b: IFraction) => {
        if (a.frac < b.frac)
            return -1;
        else if (a.frac === b.frac)
            return 0;
        else
            return 1;
    });

    return [fraction[k - 1].firstNum, fraction[k - 1].secondNum];

};