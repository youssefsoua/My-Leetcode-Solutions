function getWinner(arr: number[], k: number): number {
    const counter = new Map<number, number>(); // Map to store the count of each number
    let max = 0; // Variable to track the maximum number encountered

    for (let i = 0, j = 1; i < arr.length && j < arr.length;) {
        const current = arr[i] > arr[j] ? arr[i] : arr[j]; // Determine the current number to compare
        const count = counter.get(current) || 0; // Get the current count from the counter map or initialize it as 0
        counter.set(current, count + 1); // Increment the count for the current number

        if (counter.get(current) === k) { // If the count reaches k, we have a winner
            return current; // Return the winner
        }

        if (arr[i] > arr[j]) { // If arr[i] is greater than arr[j]
            if (i > j) {
                j = i + 1; // Move j to the next position
            } else {
                j++; // Move j to the next position
            }
        } else { // If arr[j] is greater than or equal to arr[i]
            if (j > i) {
                i = j + 1; // Move i to the next position
            } else {
                i++; // Move i to the next position
            }
        }

        max = Math.max(max, current); // Update the maximum number encountered
    }

    return max; // Return the maximum number if no winner is found
}