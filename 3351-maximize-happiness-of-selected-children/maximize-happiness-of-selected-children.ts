function maximumHappinessSum(happiness: number[], k: number): number {
    happiness.sort((a, b) => b - a);
    let result = 0;

    for (let i = 0; i < k; i++) {
        const happinessVal = happiness[i] - i;
        if (happinessVal > 0) result += happinessVal;
    }

    return result;
};