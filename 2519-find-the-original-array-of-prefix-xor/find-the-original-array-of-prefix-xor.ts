function findArray(pref: number[]): number[] {
    const result: number[] = [pref[0]];

    for (let i = 1; i < pref.length; i++) {
        result.push(pref[i - 1] ^ pref[i]);
    }

    return result;
}
