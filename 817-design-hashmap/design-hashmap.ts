class MyHashMap {
    items: Record<number, number> = {};

    put(key: number, value: number): void {
        this.items[key] = value;
    }

    get(key: number): number {
        return this.items[key] ?? -1;
    }

    remove(key: number): void {
        delete this.items[key];
    }
}


/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */