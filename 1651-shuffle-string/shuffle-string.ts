function restoreString(s: string, indices: number[]): string {
    const map = new Map<number, string>();
    let result = "";

    for (let i = 0; i < s.length; i++) {
        map.set(indices[i], s[i]);
    }

    indices.sort((a, b) => a - b);

    for (const indice of indices) {
        result += map.get(indice);
    }

    return result;
};