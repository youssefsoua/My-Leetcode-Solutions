class MinStack {
  private elements: { value: number; min: number }[] = [];

  push(val: number): void {
    if (this.elements.length)
      this.elements.push({
        value: val,
        min: Math.min(val, this.elements[this.elements.length - 1].min),
      });
    else this.elements.push({ value: val, min: val });
  }

  pop(): void {
    this.elements.pop();
  }

  top(): number {
    return this.elements[this.elements.length - 1].value;
  }

  getMin(): number {
    return this.elements[this.elements.length - 1].min;
  }
}