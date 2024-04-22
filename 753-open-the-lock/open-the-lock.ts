function openLock(deadends: string[], target: string): number {
    const deadSet = new Set<string>(deadends);
    if (deadSet.has("0000")) return -1; // Special case: if the initial state is a dead end, return -1

    const queue: [string, number][] = [["0000", 0]]; // Use a queue for breadth-first search
    const visited = new Set<string>(["0000"]); // Track visited states to avoid revisiting

    while (queue.length > 0) {
        const [current, count] = queue.shift()!;

        if (current === target) return count;

        for (let i = 0; i < 4; i++) {
            for (const move of [-1, 1]) {
                const next = rotate(current, i, move); // Rotate the wheel
                if (!visited.has(next) && !deadSet.has(next)) {
                    visited.add(next);
                    queue.push([next, count + 1]);
                }
            }
        }
    }

    return -1; // If target cannot be reached
}

// Function to rotate the lock wheel at a given index in a given direction
function rotate(current: string, index: number, move: number): string {
    const digits = current.split("").map(Number); // Convert the string to an array of digits
    digits[index] = (digits[index] + move + 10) % 10; // Apply the rotation
    return digits.join(""); // Convert the array back to a string
}
