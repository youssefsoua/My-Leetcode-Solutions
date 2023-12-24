function minOperations(s: string): number {
    // Initialize counters for odd and even counters.
    let odd: number = 0;
    let even: number = 0;

    // Loop through each character in the input string.
    for (let i = 0; i < s.length; i++) {
        // Check if the current index is odd.
        if (i % 2) {
            // If the character at the current index is '1', increment the odd counter.
            if (s[i] === "1") odd++;
            // If the character at the current index is '0', increment the even counter.
            if (s[i] === "0") even++;
        } else {
            // If the current index is even, perform similar operations but swap odd and even counters.
            if (s[i] === "0") odd++;
            if (s[i] === "1") even++;
        }
    }
    
    // Return the minimum of odd and even counters, representing the minimum number of operations needed.
    return Math.min(odd, even);
}
