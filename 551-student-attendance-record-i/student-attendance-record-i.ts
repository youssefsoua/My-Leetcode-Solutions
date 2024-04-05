function checkRecord(s: string): boolean {
    let absent: number = 0;
    let late: number = 0;

    for (const e of s) {
        if (e === "L") late++;
        if (e === "A") absent++;
        if (e !== "L") late = 0;

        if (absent === 2 || late === 3) return false;
    }

    return true;
}
