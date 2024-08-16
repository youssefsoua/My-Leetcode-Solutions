function maxDistance(arrays: number[][]): number {
    // Initialize the smallest and biggest values with the first array's first and last elements, respectively.
    let smallest = arrays[0][0];
    let biggest = arrays[0][arrays[0].length - 1];
    let maxDistance = 0;

    // Iterate through the rest of the arrays starting from the second one.
    for (let i = 1; i < arrays.length; i++) {
        const currentArray = arrays[i];
        const firstElement = currentArray[0];
        const lastElement = currentArray[currentArray.length - 1];

        // Calculate the possible maximum distances using the current array's last and first elements.
        // Update maxDistance with the maximum of the current maxDistance and the newly calculated distances.
        maxDistance = Math.max(maxDistance, Math.abs(lastElement - smallest));
        maxDistance = Math.max(maxDistance, Math.abs(biggest - firstElement));

        // Update smallest and biggest values to reflect the global minimum and maximum encountered so far.
        smallest = Math.min(smallest, firstElement);
        biggest = Math.max(biggest, lastElement);
    }

    // Return the maximum distance found.
    return maxDistance;
}
