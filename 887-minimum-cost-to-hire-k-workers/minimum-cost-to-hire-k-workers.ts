class Worker {
    quality: number;
    wage: number;
    ratio: number;

    constructor(quality: number, wage: number) {
        this.quality = quality;
        this.wage = wage;
        this.ratio = wage / quality;
    }
}

function mincostToHireWorkers(quality: number[], wage: number[], k: number): number {
    const n: number = quality.length;
    const workers: Worker[] = [];

    for (let i = 0; i < n; i++) {
        workers.push(new Worker(quality[i], wage[i]));
    }
    workers.sort((a, b) => a.ratio - b.ratio);

    let ans: number = Number.MAX_SAFE_INTEGER;
    let sumq: number = 0;
    const pool: number[] = [];

    for (const worker of workers) {
        pool.push(worker.quality);
        sumq += worker.quality;

        if (pool.length > k) {
            pool.sort((a, b) => b - a);
            sumq -= pool.shift()!;
        }

        if (pool.length === k) {
            ans = Math.min(ans, sumq * worker.ratio);
        }
    }

    return ans;
};

/**
**Class Worker**

The code defines a class named `Worker` with three properties:

- `quality`: A number representing the worker's quality of work.
- `wage`: A number representing the worker's wage.
- `ratio`: A number calculated as `wage / quality`, representing the worker's cost-effectiveness.

The constructor of the `Worker` class initializes these properties based on the provided `quality` and `wage` values.

**Function mincostToHireWorkers**

This function aims to find the minimum cost to hire `k` workers from a given set of workers. Let's analyze it step by step:

1. **Initialization:**
   - `n`: Stores the number of workers (length of the `quality` and `wage` arrays).
   - `workers`: An array of `Worker` objects created using the provided `quality` and `wage` values.
   - `workers` is sorted in ascending order based on the `ratio` property.
   - `ans`: Initialized to a very large number (`Number.MAX_SAFE_INTEGER`) to serve as the initial minimum cost.
   - `sumq`: Initialized to 0 to keep track of the total quality of hired workers.
   - `pool`: An empty array to maintain a pool of currently hired workers.

2. **Iterating through Workers:**
   - The function iterates through the sorted `workers` array.
   - For each worker:
     - The worker's quality is added to the `pool` array.
     - `sumq` is updated by adding the worker's quality.
     - If the `pool` size exceeds `k` (the desired number of workers):
       - The `pool` is sorted in descending order based on quality (to remove the least qualified worker).
       - The quality of the removed worker is subtracted from `sumq`.
     - If the `pool` size is equal to `k`:
       - The current cost is calculated as `sumq * worker.ratio`.
       - `ans` is updated if the current cost is less than the previously stored minimum cost.

3. **Return:**
   - The function returns the value of `ans`, which represents the minimum cost to hire `k` workers.

**Overall Logic**

The function essentially tries different combinations of workers by iterating through the sorted list based on cost-effectiveness (`ratio`). It maintains a pool of `k` workers and calculates the total cost based on their combined quality and wage. If a lower cost is found, it updates the minimum cost.

Feel free to ask if you have any further questions or would like specific parts of the code explained in more detail!

 */