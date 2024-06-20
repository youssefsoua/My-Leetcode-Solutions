function maxDistance(position: number[], m: number): number {
    position.sort((a, b) => a - b);

    let low = 1;
    let high = Math.floor((position[position.length - 1] - position[0]) / (m - 1));
    let result = 1;

    while (low <= high) {
        let mid = low + Math.floor((high - low) / 2);
        if (canWePlace(position, mid, m)) {
            result = mid;
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return result;
};

function canWePlace(arr: number[], dist: number, balls: number): boolean {
    let count = 1;
    let lastPlaced = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] - lastPlaced >= dist) {
            count++;
            lastPlaced = arr[i];
        }

        if (count >= balls) {
            return true;
        }
    }

    return false;
}