function lemonadeChange(bills: number[]): boolean {
    const counter = [0, 0];

    for (const bill of bills) {
        if (bill === 5) counter[0]++;

        if (bill === 10) {
            if (counter[0] !== 0) {
                counter[0]--;
                counter[1]++;
            } else {
                return false;
            }

        }

        if (bill === 20) {
            if (counter[1] > 0 && counter[0] > 0) {
                counter[0]--;
                counter[1]--;
            } else if (counter[0] > 2) {
                counter[0] -= 3;
            } else {
                return false;
            }
        }
    }

    return true;
};