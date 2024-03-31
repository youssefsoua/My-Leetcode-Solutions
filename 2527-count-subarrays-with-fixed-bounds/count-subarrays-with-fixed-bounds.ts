function countSubarrays(nums: number[], minK: number, maxK: number): number {
    let res = 0;
    let prevOutOfRange = -1; // prev i where nums[i] < minK || > maxK
    let prevMinK = -1; // prev i where nums[i] == minK
    let prevMaxK = -1; // prev i where nums[i] == maxK
    for (let i = 0; i < nums.length; i++) {
        // in each iteration, we add the number of subarrys ending
        // at i that satisfy the condition
        const num = nums[i];
        if (num < minK || num > maxK) {
            prevOutOfRange = i;
        } 
        if (num === minK) {
            prevMinK = i;
        } 
        if (num === maxK) {
            prevMaxK = i; // prevMaxK may be == prevMinK
        }
        const subarrayStart = prevOutOfRange + 1;
        if (prevMinK >= subarrayStart && prevMaxK >= subarrayStart) {
            res += Math.min(prevMinK, prevMaxK) - subarrayStart + 1;
        }
    }
    return res;
}

// function countSubarrays(nums: number[], minK: number, maxK: number): number {
//     const counter = new Map<number, number>([[minK, 0], [maxK, 0]]);

//     let start: number = 0;
//     let end: number = 0;
//     let count: number = 0;

//     while(end<nums.length){
//         if(nums[end] === minK ||nums[end] === maxK){
//             counter.set(nums[end], counter.get(nums[end])+1)
//         } 

//         if(nums[end]>maxK || nums[end]<minK){
//             counter.set(minK, 0)
//             counter.set(maxK, 0)
//             start = end + 1
//         }

//         end++
       

//         if(counter.get(minK) && counter.get(maxK)){
//             count++
//         }
//     }

//     return count;
// };