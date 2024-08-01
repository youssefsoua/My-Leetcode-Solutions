function countSeniors(details: string[]): number {
    let result = 0;

    for (const detail of details) {
        if (parseInt(detail.slice(11, 13)) > 60) result++;
    }

    return result;
};