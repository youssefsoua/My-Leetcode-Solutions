function coinChange(coins: number[], amount: number): number {
    const memo = new Map<number, number>();

    const dp = (amount: number): number =>{
        if(amount === 0) return 0;
        if(memo.has(amount)) return memo.get(amount);

        let combinations = Infinity;

        for(const coin of coins){
            const newAmount = amount - coin;
            if(newAmount >= 0){
                combinations = Math.min(combinations, dp(newAmount) + 1);
            }       
        }

        memo.set(amount, combinations);
        return combinations;
    }

    const result = dp(amount);

    return result === Infinity ? -1 : result;
};