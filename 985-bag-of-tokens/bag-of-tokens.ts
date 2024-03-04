function bagOfTokensScore(tokens: number[], power: number): number {
    tokens.sort((a, b) => a - b);
    
    let result = 0;
    let left = 0;
    let right = tokens.length - 1;

    while (left <= right) {
        if (tokens[left] > power) {
            if (left === right || !result) break;
            else {
                power += tokens[right];
                right--;
                result--;
            }
        } else {
            power -= tokens[left];
            result++;
            left++;
        }
    }

    return result;
}
