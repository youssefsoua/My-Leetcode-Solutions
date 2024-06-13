function minMovesToSeat(seats: number[], students: number[]): number {
    const n = seats.length;
    let result = 0;

    seats.sort((a, b) => a - b);
    students.sort((a, b) => a - b);

    for (let i = 0; i < n; i++) {
        result += Math.abs(seats[i] - students[i]);
    }

    return result;
};