function findMaximizedCapital(k: number, w: number, profits: number[], capital: number[]): number {
    // consider capital at hand first at every iteration
    // get a list of projects you can do with that capital,
    // pick most profitable project to do from that list.

    // Note: profit is not (profit[i]-capital[i]), it is just (profit[i])

    let queue = new MaxPriorityQueue();
    
    let combinedData: number[][] = capital.map((item, idx) => [item, profits[idx]]);
    combinedData.sort((a,b) => a[0]-b[0]);

    let currentCapital: number = w;
    let currentIdx: number = 0;

    while(k > 0) {

        while(currentIdx < combinedData.length && combinedData[currentIdx][0] <= currentCapital){
            const [capital, profit] = combinedData[currentIdx];

            queue.enqueue(profit);

            currentIdx += 1;
        }

        if(queue.size() === 0){
            return currentCapital;
        }

        const {element} = queue.dequeue();
        currentCapital += element;

        k-=1;
    }

    return currentCapital;
};