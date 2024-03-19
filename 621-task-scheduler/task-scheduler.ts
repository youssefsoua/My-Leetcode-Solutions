function leastInterval(tasks: string[], n: number): number {
    const taskCount = new Array<number>(26).fill(0);
    for (const task of tasks) {
        taskCount[task.charCodeAt(0) - 'A'.charCodeAt(0)]++;
    }
    taskCount.sort((a, b) => b - a);
    let maxCount = taskCount[0] - 1;
    let idleSlots = maxCount * n;

    for (let i = 1; i < taskCount.length && taskCount[i] > 0; i++) {
        idleSlots -= Math.min(maxCount, taskCount[i]);
    }

    idleSlots = Math.max(0, idleSlots);

    return tasks.length + idleSlots;
}
