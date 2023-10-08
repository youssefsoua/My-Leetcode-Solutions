class RandomizedSet {
    set = new Set<number>();

    insert(val: number): boolean {
        if (this.set.has(val)) {
            return false;
        } else {
            this.set.add(val);
            return true;
        }
    }

    remove(val: number): boolean {
        if (!this.set.has(val)) {
            return false;
        } else {
            this.set.delete(val);
            return true;
        }
    }

    getRandom(): number {
        return [...this.set][Math.floor(Math.random() * this.set.size)];
    }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
