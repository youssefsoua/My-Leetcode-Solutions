function createCounter(n: number): () => number {
    let i = 0
    return function() {
        const res = n + i
        i++
        return res
    }
}


/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */