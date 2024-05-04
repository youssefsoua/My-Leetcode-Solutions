function numRescueBoats(people: number[], limit: number): number {
    const n = people.length;
    let count = 0;
    people.sort((a, b) => a - b);

    let left = 0;
    let right = n - 1;

    while (left <= right) {
        if (people[left] + people[right] > limit) {
            right--;
        } else {
            left++;
            right--;
        }

        count++;
    }

    return count;
};