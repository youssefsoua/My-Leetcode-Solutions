function maxScore(s: string): number {
    // Initialize variables to keep track of the right and left counts,
    // and the maximum score.
    let right: number = 0;
    let left: number = 0;
    let max: number = 0;

    // Calculate the initial right count by summing up all characters in the string.
    for (const char of s) {
        right += +char;
    }

    // Iterate through the string, excluding the last two characters.
    for (let i = 0; i < s.length - 1; i++) {
        // Update the left and right counts based on the current character.
        if (s[i] === "0") left++;
        if (s[i] === "1") right--;

        // Update the maximum score by comparing the current sum of left and right counts.
        max = Math.max(left + right, max);
    }

    // Return the maximum score.
    return max;
}
