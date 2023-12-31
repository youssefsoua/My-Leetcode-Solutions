function maxLengthBetweenEqualCharacters(s: string): number {
    // Create a map to store the first index of each character
    const indexes = new Map<string, number>();
    
    // Initialize the maximum length variable
    let max: number = -1;

    // Iterate through each character in the string
    for (let i = 0; i < s.length; i++) {
        // Retrieve the first index of the current character from the map
        const index = indexes.get(s[i]);

        // If the character is found in the map, update the maximum length
        if (index !== undefined) {
            max = Math.max(max, i - index - 1);
        }else{
            // Set the current index of the character in the map
            indexes.set(s[i], i);
        }

    }

    // Return the maximum length between equal characters
    return max;
}