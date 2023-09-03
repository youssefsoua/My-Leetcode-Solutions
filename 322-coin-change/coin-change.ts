function coinChange(coins: number[], amount: number): number {
    const cache = new Map()

    const dfs = (amount:number) =>{
        if(amount === 0) return 0
        if(cache.has(amount)) return cache.get(amount)
        let combinations = Infinity
        for(const coin of coins){
            const newAmount = amount-coin
            if(newAmount>=0){
                combinations = Math.min(combinations, dfs(newAmount))
            }       
        }
        cache.set(amount, combinations + 1)
        return combinations + 1
    }
    const result = dfs(amount)

    return result === Infinity ? -1: result
};