function minimumPushes(word: string): number {
    // Create a map to count the occurrences of each character in the word
    let counts = new Map<string, number>(); 

    // Iterate over each character in the word and update the count in the map
    for (const ch of word) {
        counts.set(ch, (counts.get(ch) ?? 0) + 1);
    }

    // Get the values from the map, which are the counts of each character, and sort them in descending order
    const sortedCounts = [...counts.values()].sort((a, b) => b - a);

    let ans = 0;

    // Calculate the minimum number of pushes based on the sorted counts
    for (let i = 0; i < sortedCounts.length; i++) {
        if (i < 8) {
            // For the first 8 characters, add the count directly
            ans += sortedCounts[i];
        } else if (i < 16) {
            // For the next 8 characters, add twice the count
            ans += 2 * sortedCounts[i];
        } else if (i < 24) {
            // For the next 8 characters, add thrice the count
            ans += 3 * sortedCounts[i];
        } else {
            // For any additional characters, add four times the count
            ans += 4 * sortedCounts[i];
        }
    }

    return ans; 
}
