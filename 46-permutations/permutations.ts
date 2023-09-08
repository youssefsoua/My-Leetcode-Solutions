function permute(nums: number[]): number[][] {

    const results: number[][] = []

    const findPermutations = (nums: number[], permutations: number[]) =>{
        if(nums.length === 0) results.push([...permutations])
        for(const num of nums){
            permutations.push(num)
            findPermutations(nums.filter((e)=>e !== num), permutations)
            permutations.pop()
        }
    }

    findPermutations(nums, [])

    return results
};