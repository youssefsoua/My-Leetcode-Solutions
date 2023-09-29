function hIndex(citations: number[]): number {
    const n = citations.length;

    citations.sort((a, b) => a - b);

    let result = 0;

    for(let i = 0; i < n; i++){
        result = Math.max(result, Math.min(citations[i], n-i));
    }

    return result;
}
