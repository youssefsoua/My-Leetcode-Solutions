function minOperations(logs: string[]): number {
    let ops = 0;

    for (const log of logs) {
        if (log === "../" && ops) ops--;
        if (log !== "../" && log !== "./") ops++;
    }

    return ops;
};