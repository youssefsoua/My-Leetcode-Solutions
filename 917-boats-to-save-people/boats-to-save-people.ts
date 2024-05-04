function numRescueBoats(people: number[], limit: number): number {
    // Get the number of people
    const n = people.length;
    
    // Counter for the number of boats
    let count = 0;
    
    // Sorting the array of people in ascending order
    people.sort((a, b) => a - b);

    // Pointers for the heaviest and lightest person
    let left = 0;
    let right = n - 1;

    // Iterating through the array
    while (left <= right) {
        // If the sum of weights of the lightest and heaviest person exceeds the limit
        if (people[left] + people[right] > limit) {
            // Move the pointer of the heaviest person to the left (decreasing the weight)
            right--;
        } else {
            // If the sum does not exceed the limit, both the lightest and heaviest person can go on the boat
            left++;
            right--;
        }

        // Increment the boat count
        count++;
    }

    // Return the total number of boats needed
    return count;
};
