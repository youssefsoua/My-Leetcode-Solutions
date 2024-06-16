function findMaximizedCapital(k: number, w: number, profits: number[], capital: number[]): number {
    // Max priority queue to store the profits of projects we can afford
    const maxProfitQueue = new MaxPriorityQueue();

    // Combine the profits and capital into a single array of [capital, profit] pairs
    const projects = capital.map((cap, idx) => [cap, profits[idx]]);

    // Sort the projects based on the capital required
    projects.sort((a, b) => a[0] - b[0]);

    let currentCapital = w;
    let projectIndex = 0;

    for (let i = 0; i < k; i++) {
        // Add all projects that can be started with the current capital to the max profit queue
        while (projectIndex < projects.length && projects[projectIndex][0] <= currentCapital) {
            maxProfitQueue.enqueue(projects[projectIndex][1]);
            projectIndex++;
        }

        // If there are no projects that can be started, return the current capital
        if (maxProfitQueue.isEmpty()) {
            return currentCapital;
        }

        // Take the most profitable project available
        currentCapital += maxProfitQueue.dequeue().element;
    }

    return currentCapital;
}