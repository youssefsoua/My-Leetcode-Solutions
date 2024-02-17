class MaxHeap {
    heap: number[];

    constructor() {
        this.heap = [];
    }

    left(i: number): number {
        return (i * 2) + 1;
    }

    right(i: number): number {
        return (i * 2) + 2;
    }

    parent(i: number): number {
        return Math.floor((i - 1) / 2);
    }

    push(val: number): void {
        this.heap.push(val);
        this.shiftUp(this.heap.length - 1);
    }

    shiftUp(i: number): void {
        while (i > 0) {
            const p = this.parent(i);
            if (this.heap[p] < this.heap[i]) {
                [this.heap[p], this.heap[i]] = [this.heap[i], this.heap[p]];
                i = p;
            } else {
                break;
            }
        }
    }

    pop(): number | undefined {
        if (this.heap.length === 0) return undefined;
        const removed = this.heap[0];
        const last = this.heap.pop();
        if (this.heap.length) {
            this.heap[0] = last!;
            this.shiftDown(0);
        }
        return removed;
    }

    shiftDown(i: number): void {
        const l = this.left(i);
        const r = this.right(i);
        let largest = i;
        if (l < this.heap.length && this.heap[largest] < this.heap[l]) {
            largest = l;
        }
        if (r < this.heap.length && this.heap[largest] < this.heap[r]) {
            largest = r;
        }

        if (largest !== i) {
            [this.heap[i], this.heap[largest]] = [this.heap[largest], this.heap[i]];
            this.shiftDown(largest);
        }
    }
}

const furthestBuilding = function (heights: number[], bricks: number, ladders: number): number {
    const priority = new MaxHeap();
    for (let i = 1; i < heights.length; i++) {
        const h = heights[i] - heights[i - 1];
        if (h <= 0) continue;

        bricks -= h;
        priority.push(h);

        if (bricks < 0) {
            ladders--;
            const popped = priority.pop();
            if (typeof popped === 'undefined') break;
            bricks += popped;
        }
        if (ladders < 0) {
            return i - 1;
        }
    }
    return heights.length - 1;
};
