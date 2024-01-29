class MyQueue {

    stack1: number[] = [];
    stack2: number[] = [];


    push(x: number): void {
        this.stack1.push(x);
    }

    pop(): number {
        if (this.stack1.length > 0) {
            for (let i = 0; i < this.stack1.length; i++) {
                this.stack2.push(this.stack1[i]);
            }
            this.stack1.length = 0;
        }
        return this.stack2.shift();
    }

    peek(): number {
        if (this.stack2.length) return this.stack2[0];
        return this.stack1[0];
    }

    empty(): boolean {
        return this.stack1.length === 0 && this.stack2.length === 0;
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

/*
 
 
 
*/