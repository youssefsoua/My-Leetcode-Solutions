function balancedStringSplit(s: string): number {
    // initialize rCount, lCount and result to 0
    let rCount: number = 0, lCount: number = 0, result: number = 0;

    // run for of loop for s
    for (let char of s) {

        // if char is equal to "R" then increment rCount
        if (char === "R") {
            rCount++;
        } else {

            // else increment lCount
            lCount++;
        }

        // if rCount is equal to lCount
        if (rCount === lCount) {

            // increment result
            result++;

            // assign 0 to rCount and lCount
            rCount = 0;
            lCount = 0;
        }
    }

    // return answer result
    return result;
};