function minDays(bloomDay: number[], m: number, k: number): number {
    const n = bloomDay.length;

    if (n < m * k) return -1;

    let left = 1;
    let right = Math.max(...bloomDay);

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (canGetBouquets(bloomDay, m, k, mid)) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return left;
};

function canGetBouquets(bloomDay: number[], m: number, k: number, days: number): boolean {
    let bouquets = 0;
    let flowers = 0;

    for (let i = 0; i < bloomDay.length; i++) {
        if (bloomDay[i] <= days) {
            flowers++;
            if (flowers === k) {
                bouquets++;
                flowers = 0;
            }
        } else {
            flowers = 0;
        }
    }

    return bouquets >= m;
}