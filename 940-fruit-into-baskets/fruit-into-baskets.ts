function totalFruit(fruits: number[]): number {
    const counter = new Map<number, number>();
    let max: number = 0;
    let left: number = 0;
    let count: number = 0;

    for (let right = 0; right < fruits.length; right++) {
        counter.set(fruits[right], (counter.get(fruits[right]) || 0) + 1);
        count++;

        while (counter.size > 2) {
            const current = counter.get(fruits[left]);
            if (current === 1) counter.delete(fruits[left]);
            else counter.set(fruits[left], current - 1);

            left++;
            count--;
        }

        max = Math.max(count, max);
    }

    return max;
}
