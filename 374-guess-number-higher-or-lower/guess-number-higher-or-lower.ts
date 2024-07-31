/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */


function guessNumber(n: number): number {
    let high = n;
    let low = 0;

    while (low <= high) {
        const mid = low + Math.floor((high - low) / 2);
        const guessed = guess(mid);

        if (!guessed) return mid;

        else if (guessed === 1) low = mid + 1;

        else high = mid - 1;
    }
};