/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function(isBadVersion: any) {

    return function(n: number): number {
        let low = 0
        let high = n - 1

        while(low <= high){
            const mid = low + Math.floor((high - low)/2)
            if(!isBadVersion(mid - 1) && isBadVersion(mid)) return mid
            else if(isBadVersion(mid)) high = mid - 1
            else if(!isBadVersion(mid)) low = mid + 1
        }

        return low
    };
};